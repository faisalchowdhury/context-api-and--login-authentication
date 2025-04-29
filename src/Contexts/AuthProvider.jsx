import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../assets/Firebase/firebase";

const AuthProvider = ({ children }) => {
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userInfo = {
    handleRegister,
    handleLogin,
  };

  return (
    <>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </>
  );
};

export default AuthProvider;
