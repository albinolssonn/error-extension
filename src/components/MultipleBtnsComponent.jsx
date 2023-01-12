import React from "react";

const MultipleBtnsComponent = ({ text1, text2, btnAction1, btnAction2 }) => {
  return (
    <div className="multiple-btns-container">
      <div className="action-btn" onClick={btnAction1}>
        <p>{text1}</p>
      </div>
      <div className="action-btn" onClick={btnAction2}>
        <p>{text2}</p>
      </div>
    </div>
  );
};

export default MultipleBtnsComponent;
