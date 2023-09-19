"use client";
import React from "react";
import Icon from "@components/Icon";
import loGet from "lodash/get";
import { useAuth } from "@/hooks";
import Typography from "@components/Typography/Typography";
import { IconButton } from "@/components/Button";

type RegisterHeaderProps = {
  page: "register" | "verify-email" | "verify-phone";
};

export default function RegisterHeader({ page }: RegisterHeaderProps) {
  const { user } = useAuth();

  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center mb-6">
      <div className="mb-4">
        <Icon name="mazaady-logo" size={60} />
      </div>
      {page === "register" && (
        <Typography
          as="h4"
          text="helloToMazaady"
          className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-amber-500 font-medium capitalize"
          namespace="register"
        />
      )}
      <Typography
        as="h3"
        text={
          page === "register"
            ? "createAccount"
            : page === "verify-phone"
            ? "verifyPhone"
            : "verifyEmail"
        }
        namespace="register"
        className="font-medium capitalize"
      />
      {page !== "register" && (
        <div className="max-w-xs flex items-center justify-center mt-2">
          <span className="inline text-sm md:text-base text-center">
            <Typography
              text={
                page === "verify-phone"
                  ? "verifyFirstPhoneDesc"
                  : "verifyFirstEmailDesc"
              }
              className="inline"
            />{" "}
            <div className="inline-flex items-center gap-0.5">
              <Typography
                as="p1"
                text={`${
                  page === "verify-phone" &&
                  loGet(user, "country_code", "") + "-"
                }${loGet(
                  user,
                  page === "verify-phone" ? "phone" : "email",
                  ""
                )}`}
                className="inline font-bold"
              />
              <IconButton
                icon="edit"
                onClick={() => console.log("edit email/phone !")}
                className="inline"
                variant="transparent"
                size="small"
              />
            </div>{" "}
            <Typography
              text={
                page === "verify-phone"
                  ? "verifySecondPhoneDesc"
                  : "verifySecondEmailDesc"
              }
              className="inline"
            />
          </span>
        </div>
      )}
    </div>
  );
}
