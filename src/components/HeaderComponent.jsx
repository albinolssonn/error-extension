import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { auth } from "../server/firebase-config";

const HeaderComponent = ({ isLoading, setMenuToggle, menuToggle }) => {
  const menuHandler = () => {
    if (menuToggle === true) {
      setMenuToggle(false);
    } else {
      setMenuToggle(true);
    }
  };

  return (
    <div className="header-section">
      <div className="logo-container">
        <img
          id="logo"
          src="hint-main-logo.png"
          alt="hint-extension-logo"
        />
        {/* {auth.currentUser && (
          <>
            {!isLoading && (
              <>
                {menuToggle ? (
                  <div
                    className="menu-btn"
                    onClick={() => {
                      menuHandler();
                    }}
                  >
                    <CloseIcon />
                  </div>
                ) : (
                  <div
                    className="menu-btn"
                    onClick={() => {
                      menuHandler();
                    }}
                  >
                    <MenuIcon />
                  </div>
                )}
              </>
            )}
          </>
        )} */}
      </div>
    </div>
  );
};

export default HeaderComponent;
