import React, { useState } from "react";
import HeaderComponent from "./HeaderComponent";
import RegisterComponent from "./RegisterComponent";
import SignInComponent from "./SignInComponent";

const SignPage = () => {
  const [signStepper, setSignStepper] = useState(2);

  return (
    <div className="content-container">
      <HeaderComponent />

      {signStepper === 1 ? (
        <RegisterComponent setSignStepper={setSignStepper} />
      ) : (
        <SignInComponent setSignStepper={setSignStepper} />
      )}
    </div>
  );
};

export default SignPage;
