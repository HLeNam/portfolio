"use client";

import { useEffect, useState } from "react";

import { DownloadIcon, MenuIcon } from "lucide-react";

import { Logo, ThemeToggler } from "@/components/helper";
import { NavLinks } from "@/constants";
import { cn } from "@/lib/utils";

interface NavbarProps {
  openNavbar: () => void;
}

export const Navbar = ({ openNavbar }: NavbarProps) => {
  const [navBackground, setNavBackground] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Navbar background
      setNavBackground(window.scrollY >= 90);

      // Active section detection
      const sections = NavLinks.map((link) => link.href.replace("#", ""));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "transition-all duration-300 h-[12vh] z-100 fixed w-full",
        navBackground
          ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg border-b border-white/20 dark:border-gray-700/30"
          : "fixed",
      )}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO */}
        <Logo />

        {/* NAVBAR LINKS */}
        <nav className="hidden lg:flex items-center space-x-1">
          {NavLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 rounded-lg font-semibold transition-all duration-300",
                  isActive
                    ? "text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-cyan-400/10"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800",
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600 dark:bg-cyan-400" />
                )}
              </a>
            );
          })}
        </nav>

        {/* BUTTONS */}
        <div className="flex items-center space-x-4">
          <a
            href="https://drive.google.com/file/d/1HXN1X_9VLLa4zZ4G8h1VZ-TNxL7BD0ra/view?usp=sharing"
            className="box-border relative z-20 inline-flex items-center justify-center w-auto px-6 sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-blue-300 ring-offset-blue-200 hover:ring-offset-blue-500 ease focus:outline-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative z-20 flex items-center space-x-2 text-sm">
              <DownloadIcon className="size-4" />
              <span>Download CV</span>
            </span>
          </a>

          {/* THEME TOGGLER */}
          <ThemeToggler />

          {/* BURGER MENU */}
          <MenuIcon
            onClick={openNavbar}
            className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};
