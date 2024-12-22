"use client";

import { Button, Card } from "@/components";
import Input from "@/components/Input";
import React, { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  const [pending, setPending] = useState<boolean>();

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "Me", text: input }]);
      setInput("");
      setPending(true);
      fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: input }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(({ data }) => {
          setPending(false);
          setMessages((prev) => {
            return [...prev, { sender: "Bot", text: data[0].botResponse }];
          });
        });
    }
  };

  const onInputChanged = (value: string) => {
    setInput(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };
  return (
    <Card title="How can I help you today ?" className="m-4 p-4">
      <div className="flex flex-col gap-60">
        {messages.length > 0 && (
          <div className="border-b-2 flex flex-col gap-7 border-[#DCDFE4] p-4 bg-slate-100">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                <strong>{message.sender}:</strong> {message.text}
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col text-sm text-gray-500">
          <div>{pending ? "Bot writing..." : ""}</div>
          <div className="flex flex-col lg:flex-row gap-4">
            <Input
              className="lg:flex-grow"
              type="text"
              value={input}
              onChange={onInputChanged}
              onKeyDown={handleKeyDown}
            />
            <Button disabled={false} onClick={handleSend}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Chat;
