import { openai } from "@/utils/openai";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const params = url.searchParams;
  const input = params.get("input");

  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: input ?? "" },
    ],
    model: "deepseek-chat",
  });

  const responseMessage = completion.choices[0].message.content;
  return NextResponse.json({ message: responseMessage });
};
