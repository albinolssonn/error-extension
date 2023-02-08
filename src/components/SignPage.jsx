import React, { useState } from "react";
import HeaderComponent from "./HeaderComponent";
import RegisterComponent from "./RegisterComponent";
import SignInComponent from "./SignInComponent";
import TOUComponent from "./TOUComponent";

const SignPage = () => {
  const [signStepper, setSignStepper] = useState(2);

  return (
    <div className="content-container">
      {signStepper === 1 && (
        <RegisterComponent setSignStepper={setSignStepper} />
      )}
      {signStepper === 2 && <SignInComponent setSignStepper={setSignStepper} />}
      {signStepper === 3 && <TOUComponent setSignStepper={setSignStepper} />}
    </div>
  );
};

export default SignPage;
