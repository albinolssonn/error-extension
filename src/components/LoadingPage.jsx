import React from "react";
import HeaderComponent from "./HeaderComponent";
import LoadingComponent from "./LoadingComponent";

const LoadingPage = () => {
  return (
    <div className="content-container">
      <HeaderComponent />

      <LoadingComponent />
    </div>
  );
};

export default LoadingPage;
