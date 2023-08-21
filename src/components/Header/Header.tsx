"use client";
import React from "react";
import Divider from "@components/Divider";
import NavLink from "@components/NavLink";
import { Button, IconButton } from "@components/Button";
import Link from "@components/Link";
import Container from "@components/Container";
import ChangeLanguageMenu from "./ChangeLanguageMenu";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="w-full flex flex-col bg-white">
      <Container>
        <div className="w-full h-20 flex items-center justify-between">
          <div className="flex gap-8 py-2 items-center h-full">
            <ChangeLanguageMenu />
            <Divider type="vertical" className="bg-amber-200" />
            <IconButton
              icon="search"
              variant="transparent"
              iconColor="inherit"
              className="enabled:hover:bg-slate-100"
            />
            <div className="flex gap-4 items-center h-full">
              <Button>logIn</Button>
              <Link label="register" to="/register" />
            </div>
          </div>
          <div className="flex gap-8 items-center h-full">
            <nav className=" h-16 flex self-end gap-6 ">
              <NavLink to="/" label="home" />
              <NavLink to="/about" label="about" />
            </nav>
            <Logo />
          </div>
        </div>
      </Container>
    </div>
  );
}
