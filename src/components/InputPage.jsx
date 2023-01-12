import React from "react";
import HeaderComponent from "./HeaderComponent";
import InputContainer from "./InputContainer";
import SingleBtnComponent from "./SingleBtnComponent";

const InputPage = ({ setInput, OpenAIFetch }) => {
  return (
    <div className="content-container">
      <HeaderComponent />

      <InputContainer setInput={setInput} />

      <SingleBtnComponent text={"Copy explanation"} btnAction={OpenAIFetch} />
    </div>
  );
};

export default InputPage;
