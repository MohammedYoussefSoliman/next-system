import React from "react";
import AppleOAuth from "./AppleOAuth";
import GoogleOAuth from "./GoogleOAuth";

type OAuthProps = {
  provider: "google" | "apple";
};

export default function OAuth({ provider }: OAuthProps) {
  const OAuthProvider = provider === "apple" ? AppleOAuth : GoogleOAuth;
  return <OAuthProvider />;
}
