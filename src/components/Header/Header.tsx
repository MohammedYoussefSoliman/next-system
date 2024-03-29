"use client";
import React from "react";
import NavLink from "@components/NavLink";
import { IconButton } from "@components/Button";
import Container from "@components/Container";
import Drawer from "@components/Drawer";
import Logo from "./Logo";
import HeaderAction from "./components/HeaderActions";
import DrawerAction from "./components/DrawerActions";

export default function Header() {
  const [openMenuDrawer, setOpenMenuDrawer] = React.useState<boolean>(false);

  return (
    <header className="w-full flex flex-col bg-white sticky top-0 z-10 drop-shadow-sm">
      <Container spacing={2}>
        <div className="hidden w-full h-20 md:flex items-center justify-between">
          <div className="flex gap-8 items-center h-full">
            <Logo />
            <nav className=" h-16 flex self-end gap-6 ">
              <NavLink to="/" label="home" />
              <NavLink to="/about" label="about" />
            </nav>
          </div>
          <HeaderAction />
        </div>
        <div className="w-full h-20 items-center flex justify-between md:hidden">
          <div className="flex items-center gap-2">
            <IconButton
              icon="menu"
              variant="transparent"
              iconColor="inherit"
              className="enabled:hover:bg-slate-100"
              onClick={() => setOpenMenuDrawer(true)}
            />
            <Logo />
          </div>
          <IconButton
            icon="search"
            variant="transparent"
            iconColor="inherit"
            className="enabled:hover:bg-slate-100"
          />
        </div>
      </Container>
      <Drawer
        anchor="right"
        open={openMenuDrawer}
        onClose={() => setOpenMenuDrawer(false)}
        fullWidth
      >
        <div className="w-full flex flex-col gap-4">
          <div className="w-full p-6 flex items-center justify-between">
            <IconButton
              icon="times"
              variant="transparent"
              iconColor="inherit"
              className="enabled:hover:bg-slate-100"
              onClick={() => setOpenMenuDrawer(false)}
            />
            <Logo />
          </div>
          <nav className="w-full flex flex-col self-end  ">
            <NavLink
              to="/"
              label="home"
              type="aside"
              onClick={() => setOpenMenuDrawer(false)}
            />
            <NavLink
              to="/about"
              label="about"
              type="aside"
              onClick={() => setOpenMenuDrawer(false)}
            />
          </nav>
          <DrawerAction setOpenMenuDrawer={() => setOpenMenuDrawer(false)} />
        </div>
      </Drawer>
    </header>
  );
}
