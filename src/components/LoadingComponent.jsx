import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";

const LoadingComponent = () => {
  return (
    <div className="loading-container">
      <SettingsIcon id="loading-gear-icon" />
      <p>Processing your request...</p>
    </div>
  );
};

export default LoadingComponent;
