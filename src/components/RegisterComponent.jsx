import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  registerWithEmail,
  signInWithGoogle,
} from "../functions/sign-functions";

const RegisterComponent = ({ setSignStepper }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vPassword, setVPassword] = useState("");
  const [errorCode, setErrorCode] = useState("");

  const navigateToSignIn = () => {
    setSignStepper(2);
  };

  const registerHandler = () => {
    registerWithEmail(email, password, vPassword, setErrorCode);
  };

  const googleSignInHandler = () => {
    signInWithGoogle(setErrorCode);
  };

  // Funktion för visuell felmeddelande

  return (
    <div className="sign-form">
      <div className="title-container">
        <h2>Sign up</h2>
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
        <input
          placeholder="Verify Password..."
          type="password"
          onChange={(e) => setVPassword(e.target.value)}
        />
      </div>

      <div className="btn-container">
        <div
          className="sign-btn"
          onClick={registerHandler}
        >
          <p>Create Account</p>
        </div>
        {/* <div className="divider">
          <div className="line"></div>
          <p>or</p>
          <div className="line"></div>
        </div>
        <div
          className="sign-btn"
          onClick={googleSignInHandler}
        >
          <p>Sign in with</p>
          <FcGoogle fontSize={"16px"} />
        </div> */}
        <div className="navlink">
          <p onClick={navigateToSignIn}>Are you already a part of us?</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
