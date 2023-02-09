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

  const termsOfUseAction = () => {
    console.log("Terms of use compliant!");
  };

  // const googleSignInHandler = () => {
  //   signInWithGoogle(setErrorCode);
  // };

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

      <div className="sign-btn-container">
        <div
          id="main-btn"
          onClick={registerHandler}
        >
          <p>Create Account</p>
        </div>
        <div className="navlink">
          <p onClick={navigateToSignIn}>Are you already a part of us?</p>
        </div>
      </div>

      <div className="t-o-u-text">
        <p>By signing up you agree to our </p>
        <p
          onClick={() => setSignStepper(3)}
          id="inline-link"
        >
          terms of use.
        </p>
      </div>
    </div>
  );
};

export default RegisterComponent;
