import React from "react";

const OutputContainer = ({ result }) => {
  return (
    <div className="text-container">
      <textarea readOnly>{result}</textarea>
    </div>
  );
};

export default OutputContainer;
