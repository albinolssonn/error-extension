import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";
import { signInWithEmail, signInWithGoogle } from "../functions/sign-functions";

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

  // const googleSignInHandler = () => {
  //   signInWithGoogle(setErrorCode);
  // };

  // Funktion för visuell felmeddelande

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
        <div
          id="main-btn"
          onClick={emailLoginHandler}
        >
          <p>Sign in</p>
        </div>

        <div className="navlink">
          <p onClick={navigateToRegister}>Don't have an account yet?</p>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
