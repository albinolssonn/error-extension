import React from "react";
import HeaderComponent from "./HeaderComponent";
import MultipleBtnsComponent from "./MultipleBtnsComponent";
import OutputContainer from "./OutputContainer";

const OutPutPage = ({ result, copyResultFunction, resetFunction }) => {
  return (
    <div className="content-container">
      <HeaderComponent />

      <OutputContainer result={result} />

      <MultipleBtnsComponent
        text1={"Copy explanation"}
        text2={"New error"}
        btnAction1={copyResultFunction}
        btnAction2={resetFunction}
      />
    </div>
  );
};

export default OutPutPage;
