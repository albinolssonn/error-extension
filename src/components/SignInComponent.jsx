import React, { useState } from "react";
import { signInWithEmail } from "../functions/sign-functions";
import MainBtnComponent from "./MainBtnComponent";

const SignInComponent = ({ setSignStepper }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCode, setErrorCode] = useState("");

  const navigateToRegister = () => {
    setSignStepper(1);
  };

  const emailLoginHandler = () => {
    signInWithEmail(email, password, setErrorCode);
  };

  return (
    <div className="sign-form">
      <div className="title-container">
        <h2>Sign in</h2>
      </div>
      <div className="input-container">
        <input
          placeholder="Emailaddress..."
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password..."
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="sign-btn-container">
        <MainBtnComponent
          btnAction={emailLoginHandler}
          btnText={"Sign in"}
        />

        <div className="navlink">
          <p onClick={navigateToRegister}>Don't have an account yet?</p>
        </div>
      </div>

      {errorCode && (
        <div className="error-message">
          <div className="error-message-text"> {errorCode}</div>
        </div>
      )}
    </div>
  );
};

export default SignInComponent;
