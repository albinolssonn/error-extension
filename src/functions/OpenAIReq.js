import { Configuration, OpenAIApi } from "openai";
import { OPEN_AI_API_KEY } from "../API/open_api";

const configuration = new Configuration({
  apiKey: OPEN_AI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const OpenAIFetch = async (setIsLoading, input, setResult) => {
  setIsLoading(true);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Q: Explain with maximum 100 tokens how to solve the following error: ${input}\nA:`,
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ["\n"],
  });

  if (response.data.choices[0].text.length === 0) {
    setResult("Sorry, but I don't have a good answer for this one, yet...");
    setIsLoading(false);
  } else {
    setResult(response.data.choices[0].text);
    setIsLoading(false);
  }
};

export const testFunc = () => {
  console.log("Funkar");
};
