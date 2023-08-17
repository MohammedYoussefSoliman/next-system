"use client";
import React from "react";
import NavLink from "@components/NavLink";
import Container from "@components/Container";

export default function Header() {
  return (
    <div className="w-full py-2 flex flex-col">
      <Container>
        <div>upper section</div>
        <div className="w-full h-20 py-2 flex items-center justify-between">
          <nav className="w-full h-min-50 flex items-center flex-1 gap-6 h-full">
            <NavLink to="/register" label="register" />
            <NavLink to="/" label="home" />
            <NavLink to="/about" label="about" />
          </nav>
          <div className="flex-1"></div>
        </div>
      </Container>
    </div>
  );
}
