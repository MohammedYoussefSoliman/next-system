import React from "react";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import loGet from "lodash/get";
import socialMediaRegisterService from "@appState/slices/auth/socialMediaRegisterService";
import { useAppDispatch } from "@/hooks";
import { classNames, formDataHandler } from "@/utils";
import Typography from "@components/Typography";
import withOAuthGoogleProvider from "@components/withOAuthGoogleProvider";
import Icon from "@components/Icon";

function GoogleOAuth() {
  const dispatch = useAppDispatch();
  const route = useRouter();
  const googleLogin = useGoogleLogin({
    onSuccess: async (res) => {
      const userResponse = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${res.access_token}`,
          },
        }
      );
      dispatch(
        socialMediaRegisterService({
          formData: formDataHandler({
            provider_id: +loGet(userResponse, "data.sub", ""),
            provider_name: "google",
            email: loGet(userResponse, "data.email", ""),
            name: loGet(userResponse, "data.name", ""),
            avatar_url: loGet(userResponse, "data.picture", ""),
          }),
          onSuccess() {
            route.push("/");
          },
        })
      );
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
