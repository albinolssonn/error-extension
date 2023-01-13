/*global chrome*/

import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import OutPutPage from "./components/OutPutPage";
import InputPage from "./components/InputPage";
import LoadingPage from "./components/LoadingPage";
import { open_API_key } from "./APIKeys";

function App() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");

  const configuration = new Configuration({
    apiKey: open_API_key,
  });

  const openai = new OpenAIApi(configuration);

  const OpenAIFetch = async () => {
    setIsLoading(true);

    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Q: Explain how to solve the following error: ${input}\nA:`,
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
    } catch (err) {
      setResult(err.text);
    }
  };

  const copyResultFunction = () => {
    navigator.clipboard.writeText(result);
  };

  const resetFunction = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="extenstion-section">
        {isLoading ? (
          <LoadingPage />
        ) : (
          <>
            {result ? (
              <OutPutPage
                result={result}
                copyResultFunction={copyResultFunction}
                resetFunction={resetFunction}
              />
            ) : (
              <InputPage setInput={setInput} OpenAIFetch={OpenAIFetch} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
