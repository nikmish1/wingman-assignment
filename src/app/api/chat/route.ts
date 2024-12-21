import { getChatResponse } from "@/utils/chatResponse";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { query } = await req.json();

  const res = await getChatResponse({
    query: query,
  });

  return NextResponse.json({
    data: res,
  });
};
