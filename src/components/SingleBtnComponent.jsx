import React from "react";

const SingleBtnComponent = ({ btnAction }) => {
  return (
    <div className="single-button-container">
      <div className="action-btn" onClick={btnAction}>
        <p>Explain error</p>
      </div>
    </div>
  );
};

export default SingleBtnComponent;
