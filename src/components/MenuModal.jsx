import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import PublicIcon from "@mui/icons-material/Public";
import { signOutFunction } from "../functions/sign-functions";

const MenuModal = ({ setMenuToggle }) => {
  const signOutHandler = () => {
    signOutFunction(setMenuToggle);
  };

  return (
    <div className="menu-section">
      <div className="menu-container">
        <button id="menu-btn">Upgrade account</button>
        <button id="menu-btn">Account Settings</button>
      </div>

      <div className="menu-footer">
        <div
          className="footer-btn"
          onClick={signOutHandler}
        >
          <LogoutIcon />
          <p>Sign Out</p>
        </div>

        <div className="footer-btn">
          <PublicIcon />
          <p>Visit us</p>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
