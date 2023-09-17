"use client";
import React from "react";
import Divider from "@components/Divider";
import NavLink from "@components/NavLink";
import { useAuth } from "@/hooks";
import { Button, IconButton } from "@components/Button";
import Link from "@components/Link";
import Container from "@components/Container";
import Drawer from "@components/Drawer";
import Typography from "@components/Typography";
import ChangeLanguageMenu from "./ChangeLanguageMenu";
import Logo from "./Logo";

export default function Header() {
  const { loggedIn } = useAuth();
  const [openMenuDrawer, setOpenMenuDrawer] = React.useState<boolean>(false);

  return (
    <div className="w-full flex flex-col bg-white">
      <Container spacing={2}>
        <div className="hidden w-full h-20 md:flex items-center justify-between">
          <div className="flex gap-8 items-center h-full">
            <Logo />
            <nav className=" h-16 flex self-end gap-6 ">
              <NavLink to="/" label="home" />
              <NavLink to="/about" label="about" />
            </nav>
          </div>
          <div className="flex gap-8 py-2 items-center h-full">
            {!loggedIn ? (
              <div className="flex gap-4 items-center h-full">
                <Link label="register" to="/register" />
                <Button>logIn</Button>
              </div>
            ) : (
              <Button>logOut</Button>
            )}
            <IconButton
              icon="search"
              variant="transparent"
              iconColor="inherit"
              className="enabled:hover:bg-slate-100"
            />
            <Divider type="vertical" className="bg-amber-200" />
            <ChangeLanguageMenu />
          </div>
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
          <div className="w-full p-6 flex flex-col gap-8 items-center">
            <Button size="large" className="w-full">
              logIn
            </Button>
            <Link
              label="register"
              to="/register"
              onClick={() => setOpenMenuDrawer(false)}
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
