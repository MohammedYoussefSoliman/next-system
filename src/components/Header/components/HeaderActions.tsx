"use client";
import React from "react";
import Divider from "@components/Divider";
import Logout from "@components/Logout";
import { useAuth } from "@/hooks";
import { Button, IconButton, LinkButton } from "@components/Button";
import Link from "@components/Link";

export default function HeaderAction() {
  const { loggedIn } = useAuth();

  return (
    <div className="flex gap-8 py-2 items-center h-full">
      {!loggedIn ? (
        <div className="flex gap-4 items-center h-full">
          <Link label="register" to="/register" />
          <LinkButton to="/login">logIn</LinkButton>
        </div>
      ) : (
        <Logout />
      )}
      <IconButton
        icon="search"
        variant="transparent"
        iconColor="inherit"
        className="enabled:hover:bg-slate-100"
      />
      <Divider type="vertical" className="bg-amber-200" />
    </div>
  );
}
