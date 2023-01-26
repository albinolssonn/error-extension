import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../server/firebase-config";

// Inloggning

export const signInWithEmail = async (email, password, setErrorCode) => {
  try {
    const tmpUser = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    setErrorCode(error.message);
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
      setErrorCode(error.message);
    }
  } else {
    console.log("Password missmatch...");
  }
};

export const signInWithGoogle = async (setErrorCode) => {
  try {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  } catch (error) {
    setErrorCode(error.message);
  }
};
