import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderComponent = () => {
  return (
    <div className="header-section">
      <div className="logo-container">
        <img
          id="logo"
          src="hint-main-logo.png"
          alt="hint-extension-logo"
        />

        <div className="menu-btn">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
