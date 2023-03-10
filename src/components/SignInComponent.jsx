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

  const googleSignInHandler = () => {
    signInWithGoogle(setErrorCode);
  };

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

      <div className="btn-container">
        <div
          className="sign-btn"
          onClick={emailLoginHandler}
        >
          <p>Sign in</p>
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
          <p onClick={navigateToRegister}>Don't have an account yet?</p>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
