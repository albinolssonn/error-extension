import React from "react";

const InputContainer = ({ setInput, fetchHandler }) => {
  return (
    <>
      <div className="text-container">
        <textarea
          placeholder="Paste your error message here..."
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
      </div>

      <div className="single-button-container">
        <div
          className="action-btn"
          onClick={fetchHandler}
        >
          <p>Explain error</p>
        </div>
      </div>
    </>
  );
};

export default InputContainer;
