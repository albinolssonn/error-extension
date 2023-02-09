import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import PublicIcon from "@mui/icons-material/Public";
import { signOutFunction } from "../functions/sign-functions";

const MenuComponent = ({ setMenuToggle, setContentToggle }) => {
  const signOutHandler = () => {
    signOutFunction(setMenuToggle);
  };
  return (
    <div className="menu-container">
      <div className="menu-btn-container">
        <div
          id="main-btn"
          onClick={() => setContentToggle(2)}
        >
          Privacy Policy
        </div>
      </div>

      <div className="footer">
        <div
          id="main-btn"
          onClick={signOutHandler}
        >
          <LogoutIcon />
          <p>Sign Out</p>
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
