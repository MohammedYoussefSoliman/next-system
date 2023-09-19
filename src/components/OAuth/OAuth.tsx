import React from "react";
import AppleOAuth from "./AppleOAuth";
import GoogleOAuth from "./GoogleOAuth";
import { OAuthProps } from "./OAuth.types";

export default function OAuth({ provider, mode }: OAuthProps) {
  const OAuthProvider = provider === "apple" ? AppleOAuth : GoogleOAuth;
  return <OAuthProvider mode={mode} />;
}
