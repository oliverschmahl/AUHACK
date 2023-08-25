import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export const POST = (async ({ request }) => {
  const { messages } = await request.json();

  console.log("server messages: " + JSON.stringify(messages));

  const chatGPT = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
  });

  const chatGPTMessage = chatGPT.data.choices[0].message;
  console.log("chatGPTMessage: " + JSON.stringify(chatGPTMessage));
  return json(chatGPTMessage);
}) satisfies RequestHandler;
