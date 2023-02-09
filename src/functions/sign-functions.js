import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  getAuth,
  signOut,
} from "firebase/auth";
import { auth } from "../server/firebase-config";

// Inloggning

export const signInWithEmail = async (email, password, setErrorCode) => {
  try {
    const tmpUser = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (error.message === "Firebase: Error (auth/user-not-found).") {
      setErrorCode("User not found.");
    } else if (error.message === "Firebase: Error (auth/invalid-email).") {
      setErrorCode("Invalid email address.");
    } else if (error.message === "Firebase: Error (auth/wrong-password).") {
      setErrorCode("Incorrect password.");

      console.log(error.message);
    } else {
      setErrorCode(
        "Sorry, but we are currently experience authentication issues."
      );
    }
  }
};

// Registrering med email

export const registerWithEmail = async (
  email,
  password,
  vPassword,
  setErrorCode
) => {
  if (password === vPassword) {
    try {
      const tmpUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      console.log(error.message);
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        setErrorCode("Email address already exists.");
      } else if (error.message === "Firebase: Error (auth/invalid-email).") {
        setErrorCode("Invalid email address.");
      } else if (
        error.message ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)."
      ) {
        setErrorCode("Password has to be at least six characters.");
      } else {
        setErrorCode(
          "Sorry, but we are currently experience authentication issues."
        );
      }
    }
  } else {
    setErrorCode("Password does not match.");
  }
};

// Sign & Register with google
export const signInWithGoogle = async (setErrorCode) => {
  try {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  } catch (error) {
    setErrorCode(error.message);
  }
};

// Signout function

export const signOutFunction = async (setMenuToggle) => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      setMenuToggle(false);
    })
    .catch((error) => {
      // An error happened.
    });
};
