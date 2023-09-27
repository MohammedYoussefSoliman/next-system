"use client";
import React from "react";
import Divider from "@components/Divider";
import ChangeLanguageMenu from "../ChangeLanguageMenu";
import Logout from "@components/Logout";
import { useAuth } from "@/hooks";
import { IconButton, LinkButton } from "@components/Button";
import Link from "@components/Link";
import UserInfo from "./UserInfo";

export default function HeaderAction() {
  const { loggedIn } = useAuth();

  return (
    <div className="flex gap-4 py-2 items-center h-full">
      <IconButton
        icon="search"
        variant="transparent"
        iconColor="inherit"
        className="enabled:hover:bg-slate-100"
      />
      <Divider type="vertical" className="bg-amber-200" />
      {!loggedIn ? (
        <div className="flex gap-4 items-center h-full">
          <Link label="register" to="/register" />
          <LinkButton to="/login">logIn</LinkButton>
        </div>
      ) : (
        <>
          <IconButton
            icon="bell"
            variant="transparent"
            iconColor="inherit"
            className="enabled:hover:bg-slate-100"
          />
          <Divider type="vertical" className="bg-amber-200" />
          <Logout />
          <UserInfo />
          <LinkButton icon="plus-circle" to="/add-product">
            addProduct
          </LinkButton>
        </>
      )}

      <ChangeLanguageMenu />
    </div>
  );
}
