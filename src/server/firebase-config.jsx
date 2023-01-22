import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCz91K3pvPRbVpaTBS6-o0RIJ8yMgoBFYQ",
  authDomain: "errorhandler-634f9.firebaseapp.com",
  projectId: "errorhandler-634f9",
  storageBucket: "errorhandler-634f9.appspot.com",
  messagingSenderId: "145484171001",
  appId: "1:145484171001:web:07ec6cdadcc721f24b4428",
  measurementId: "G-D9S5EBEETF",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
