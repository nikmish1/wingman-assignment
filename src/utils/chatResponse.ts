import { OpenAI } from "langchain/llms/openai";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "langchain/prompts";
import z from "zod";

const obj = z.object({
  botResponse: z
    .string()
    .max(2000)
    .describe(
      `user query related to the product, the maximum length of the caption is 600 characters`
    ),
});

const parser = StructuredOutputParser.fromZodSchema(z.array(obj));

const getPrompt = async ({ userQuery }: { userQuery: string }) => {
  const format_instructions = parser.getFormatInstructions();

  const prompt = new PromptTemplate({
    template: `You are expert in digital camaras and SLRs. 
        Provide a detailed and informative response to the user's query about the camera they want to buy. Include specifications, 
        features, pros and cons, and any other relevant information that would help the user make an informed decision.
        Maintain a friendly and professional tone throughout the response. Don't answer anything that is not related to the product.
        Format your response to match the format of,  \n{format_instructions}\n
        User Query: {userQuery}
      `,
    inputVariables: ["userQuery"],
    partialVariables: { format_instructions },
  });

  const input = await prompt.format({
    userQuery: userQuery,
  });

  return input;
};

export const getChatResponse = async ({ query }: { query: string }) => {
  const input = await getPrompt({ userQuery: query });
  const model = new OpenAI({
    openAIApiKey: process.env.OPEN_AI_KEY,
    temperature: 0.8,
    modelName: "gpt-3.5-turbo-1106",
  });
  const result = await model.call(input);
  console.log("result", result);

  try {
    const output = await parser.parse(result);
    return output;
  } catch (e) {
    console.log(e);
    return null;
  }
};
