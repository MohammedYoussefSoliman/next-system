"use client";
import React from "react";
import Typography from "@/components/Typography";
import Link from "@/components/Link";

type Props = {
  type: "login" | "register";
};

export default function RedirectAuthStatement({ type }: Props) {
  return (
    <div className="flex w-full items-center justify-center">
      <span className="inline">
        <Typography
          className="inline"
          color="light"
          text={type === "login" ? "alreadyHaveAccount" : "dontHaveAccount"}
          namespace="register"
        />{" "}
        <Link
          className="inline"
          label={type === "login" ? "login" : "register"}
          to={type === "login" ? "/login" : "/register"}
        />
      </span>
    </div>
  );
}
