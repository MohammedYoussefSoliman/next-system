import React from "react";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import loGet from "lodash/get";
import socialMediaRegisterService from "@appState/slices/auth/socialMediaRegisterService";
import socialMediaLoginService from "@appState/slices/auth/socialMediaLoginService";
import { useAppDispatch } from "@/hooks";
import { classNames } from "@/utils";
import Typography from "@components/Typography";
import withOAuthGoogleProvider from "@components/withOAuthGoogleProvider";
import Icon from "@components/Icon";
import { ProviderProps } from "./OAuth.types";

function GoogleOAuth({ mode }: ProviderProps) {
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
      if (mode === "register") {
        dispatch(
          socialMediaRegisterService({
            formData: {
              provider_id: +loGet(userResponse, "data.sub", ""),
              provider_name: "google",
              email: loGet(userResponse, "data.email", ""),
              name: loGet(userResponse, "data.name", ""),
              avatar_url: loGet(userResponse, "data.picture", ""),
            },
            onSuccess() {
              route.push("/");
            },
          })
        );
      } else {
        dispatch(
          socialMediaLoginService({
            formData: {
              provider_id: +loGet(userResponse, "data.sub", ""),
              provider_name: "google",
              email: loGet(userResponse, "data.email", ""),
            },
            showSuccessMessage: true,
            onSuccess() {
              route.push("/");
            },
          })
        );
      }
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
          capitalizeFirstLetter
        />
      </div>
    </button>
  );
}

export default withOAuthGoogleProvider(GoogleOAuth);
