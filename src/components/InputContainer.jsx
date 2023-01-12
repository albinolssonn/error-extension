import React from "react";

const InputContainer = ({ setInput }) => {
  return (
    <div className="text-container">
      <textarea
        placeholder="Paste your error message here..."
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
    </div>
  );
};

export default InputContainer;
