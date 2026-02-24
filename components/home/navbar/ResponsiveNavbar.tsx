"use client";

import { useState } from "react";

import { MobileNavbar } from "./MobileNavbar";
import { Navbar } from "./Navbar";

export const ResponsiveNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const openNavbar = () => {
    setShowNavbar(true);
  };

  const closeNavbar = () => {
    setShowNavbar(false);
  };

  return (
    <div>
      <Navbar openNavbar={openNavbar} />
      <MobileNavbar showNavbar={showNavbar} closeNavbar={closeNavbar} />
    </div>
  );
};
