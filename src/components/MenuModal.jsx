import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import TuneIcon from "@mui/icons-material/Tune";
import { signOutFunction } from "../functions/sign-functions";

const MenuModal = ({ setMenuToggle }) => {
  const signOutHandler = () => {
    signOutFunction(setMenuToggle);
  };

  return (
    <div className="menu-section">
      <div className="menu-container">
        <button id="menu-btn">Menu 1</button>
        <button id="menu-btn">Menu 1</button>
        <button id="menu-btn">Menu 1</button>
        <button id="menu-btn">Menu 1</button>
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
          <TuneIcon />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
