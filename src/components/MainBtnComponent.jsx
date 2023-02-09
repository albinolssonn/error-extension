import React from "react";

const MainBtnComponent = ({ btnAction, btnText }) => {
  return (
    <div
      id="main-btn"
      onClick={btnAction}
    >
      <p>{btnText}</p>
    </div>
  );
};

export default MainBtnComponent;
