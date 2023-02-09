import React from "react";
import MainBtnComponent from "./MainBtnComponent";

const InputContainer = ({ setInput, fetchHandler }) => {
  return (
    <div className="text-content">
      <textarea
        placeholder="Paste your error message here..."
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <div className="footer">
        <MainBtnComponent
          btnAction={fetchHandler}
          btnText={"Explain error"}
        />
      </div>
    </div>
  );
};

export default InputContainer;
