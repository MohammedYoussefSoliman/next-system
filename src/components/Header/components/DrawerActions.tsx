"use client";
import React from "react";
import Typography from "@components/Typography";
import ChangeLanguageMenu from "../ChangeLanguageMenu";
import Logout from "@components/Logout";
import { useAuth } from "@/hooks";
import { LinkButton } from "@components/Button";
import Link from "@components/Link";
import UserInfo from "./UserInfo";

type DrawerProps = {
  setOpenMenuDrawer: () => void;
};

export default function DrawerAction({ setOpenMenuDrawer }: DrawerProps) {
  const { loggedIn } = useAuth();

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full p-6 flex items-center justify-between">
        <Typography
          as="h4"
          className="font-normal"
          color="light"
          text="language"
          capitalizeFirstLetter
        />
        <ChangeLanguageMenu />
      </div>
      {!loggedIn ? (
        <div className="w-full p-6 flex flex-col gap-8 items-center">
          <Link label="register" to="/register" onClick={setOpenMenuDrawer} />
          <LinkButton onClick={setOpenMenuDrawer} to="/login" width="full">
            logIn
          </LinkButton>
        </div>
      ) : (
        <div className="w-full p-6 flex flex-col gap-8">
          <Logout />
          <UserInfo showDetails />
        </div>
      )}
    </div>
  );
}
