import React from "react";
import MainBtnComponent from "./MainBtnComponent";

const OutputContainer = ({ result, resetHandler, copyHandler }) => {
  return (
    <div className="text-content">
      <div className="text-content">
        <textarea readOnly>{result}</textarea>
      </div>

      <div className="footer">
        <MainBtnComponent
          btnAction={copyHandler}
          btnText={"Copy explanation"}
        />

        <MainBtnComponent
          btnAction={resetHandler}
          btnText={"New error"}
        />
      </div>
    </div>
  );
};

export default OutputContainer;
