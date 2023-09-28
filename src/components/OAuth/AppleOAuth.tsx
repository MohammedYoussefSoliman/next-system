import React from "react";
import axios from "axios";
import AppleLogin from "react-apple-login";
import { classNames } from "@/utils";
import Typography from "@components/Typography";
import Icon from "@components/Icon";
import { ProviderProps } from "./OAuth.types";

export default function AppleOAuth({ mode }: ProviderProps) {
  console.log(process.env.NEXT_PUBLIC_APPLE_CLIENTID);
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
    "bg-zinc-100",
    "hover:bg-zinc-200",
  ]);
  return (
    <AppleLogin
      clientId={process.env.NEXT_PUBLIC_APPLE_CLIENTID as string}
      redirectURI={process.env.NEXT_PUBLIC_ORIGIN_URL as string}
      responseType="code"
      responseMode="query"
      usePopup
      callback={(response) => console.log(response)}
      render={(renderProps) => (
        <button onClick={renderProps.onClick} type="button" className={classes}>
          <Icon name="apple" />
          <div className="flex flex-1 items-center justify-center">
            <Typography
              as="p1"
              className="font-medium"
              text={`appleLogin`}
              namespace="register"
            />
          </div>
        </button>
      )}
    />
  );
}
