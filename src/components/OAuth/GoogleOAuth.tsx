import React from "react";
import axios from "axios";
import { classNames } from "@/utils";
import { useGoogleLogin } from "@react-oauth/google";
import Typography from "@components/Typography";
import withOAuthGoogleProvider from "@components/withOAuthGoogleProvider";
import Icon from "@components/Icon";

function GoogleOAuth() {
  const googleLogin = useGoogleLogin({
    onSuccess: async (res) => {
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${res.access_token}`,
          },
        }
      );
      console.log(userInfo);
    },
  });
  const classes = classNames([
    "outline-none",
    "border-none",
    "cursor-pointer",
    "rounded-xl",
    "py-2",
    "px-4",
    "w-full",
    "flex",
    "items-center",
    "justify-between",
    "gap-2",
    "bg-amber-50",
    "hover:bg-amber-100",
  ]);
  return (
    <button onClick={() => googleLogin()} type="button" className={classes}>
      <Icon name="google" />
      <div className="flex flex-1 items-center justify-center">
        <Typography
          as="p1"
          className="font-medium"
          text="googleLogin"
          namespace="register"
        />
      </div>
    </button>
  );
}

export default withOAuthGoogleProvider(GoogleOAuth);
