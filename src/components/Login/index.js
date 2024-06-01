import React from "react";

import { auth } from "../Auth";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import "./styles.css";

// Configure FirebaseUI.
export const uiConfig = {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
      disableSignUp: {
        status: true,
        adminEmail: "",
      },
    },
  ],
};

export function Login() {
  return (
    <div className="auth-wrapper">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
}
