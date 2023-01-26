import React from "react";

const OutputContainer = ({ result, resetHandler, copyHandler }) => {
  return (
    <>
      <div className="text-container">
        <textarea readOnly>{result}</textarea>
      </div>

      <div className="multiple-btns-container">
        <div
          className="action-btn"
          onClick={copyHandler}
        >
          <p>Copy Explanation</p>
        </div>
        <div
          className="action-btn"
          onClick={resetHandler}
        >
          <p>New Error</p>
        </div>
      </div>
    </>
  );
};

export default OutputContainer;
