import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../server/firebase-config";
import { OpenAIFetch } from "../functions/OpenAIReq";
import {
  copyResultFunction,
  resetFunction,
} from "../functions/PracticalFunctions";
import HeaderComponent from "./HeaderComponent";
import InputContainer from "./InputContainer";
import LoadingComponent from "./LoadingComponent";
import OutputContainer from "./OutputContainer";
import SignPage from "./SignPage";

const IndexPage = () => {
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const fetchHandler = () => {
    OpenAIFetch(setIsLoading, input, setResult);
  };

  const resetHandler = () => {
    resetFunction(setInput, setResult);
  };

  const copyHandler = () => {
    copyResultFunction(result);
  };

  return (
    <div className="content-container">
      <HeaderComponent />

      {user ? (
        <>
          {isLoading ? (
            <LoadingComponent />
          ) : (
            <>
              {result ? (
                <OutputContainer
                  result={result}
                  resetHandler={resetHandler}
                  copyHandler={copyHandler}
                />
              ) : (
                <InputContainer
                  setInput={setInput}
                  fetchHandler={fetchHandler}
                />
              )}
            </>
          )}
        </>
      ) : (
        <SignPage />
      )}
    </div>
  );
};

export default IndexPage;
