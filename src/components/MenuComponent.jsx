import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOutFunction } from "../functions/sign-functions";
import MainBtnComponent from "./MainBtnComponent";

const MenuComponent = ({ setMenuToggle, setContentToggle }) => {
  const signOutHandler = () => {
    signOutFunction(setMenuToggle);
  };
  return (
    <div className="menu-container">
      <div className="menu-btn-container">
        <MainBtnComponent
          btnAction={() => setContentToggle(2)}
          btnText={"Privacy Policy"}
        />
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
