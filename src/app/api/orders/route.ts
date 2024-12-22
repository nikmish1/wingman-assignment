import { NextResponse } from "next/server";

export async function GET(): Promise<Response> {
  const response = await fetch(
    "https://api.jsonbin.io/v3/b/676866fae41b4d34e469a78e"
  );
  const data = await response.json();
  return NextResponse.json({
    data: data.record,
  });
}
