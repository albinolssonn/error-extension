import React from "react";
import InputContainer from "./InputContainer";
import OutputContainer from "./OutputContainer";
import SingleBtnComponent from "./SingleBtnComponent";

const TextComponent = ({ result, setInput }) => {
  if (result) {
    return <OutputContainer result={result} />;
  } else {
    return <InputContainer setInput={setInput} />;
  }
};

export default TextComponent;
