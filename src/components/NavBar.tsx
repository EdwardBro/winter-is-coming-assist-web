"use client";
import React, { FC, useState } from "react";
import Link from "next/link";
import type { NavLink } from "../types";
import { Language, useLanguage } from "@/context/LanguageContext";

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Rules", href: "/rules" },
  { label: "FAQ", href: "/faq" },
  { label: "Hints", href: "/hints" },
  { label: "Extra", href: "/extra" },
];

const LanguageSwitcher: FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleSwitch = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex">
      <button
        onClick={() => handleSwitch("en")}
        className={`px-1 border rounded-l-lg hover:bg-gray-200 ${
          language === "en"
            ? "bg-blue-500 text-white"
            : "bg-transparent text-gray-500"
        }`}
      >
        <span role="img" aria-label="US Flag" className="text-3xl">
          🇺🇸
        </span>
      </button>
      <button
        onClick={() => handleSwitch("ru")}
        className={`px-1 border rounded-r-lg hover:bg-gray-200 ${
          language === "ru"
            ? "bg-blue-500 text-white"
            : "bg-transparent text-black"
        }`}
      >
        <span role="img" aria-label="Russian Flag" className="text-3xl">
          🇷🇺
        </span>
      </button>
    </div>
  );
};

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavLinkItem: FC<{
  item: NavLink;
  onClick?: () => void;
  className?: string;
}> = ({ item, onClick, className = "" }) => (
  // Using the new Next.js Link behavior without a nested <a> tag.
  <Link
    href={item.href}
    onClick={onClick}
    className={`hover:underline ${className}`}
  >
    {item.label}
  </Link>
);

const LeftDrawer: FC<DrawerProps> = ({ isOpen, onClose }) => (
  <div
    className={`fixed inset-0 z-40 transition-opacity duration-300 ${
      isOpen ? "opacity-90" : "opacity-0 pointer-events-none"
    }`}
    onClick={onClose}
  >
    <div
      className={`absolute top-0 left-0 w-64 h-1/3 bg-white shadow-lg m-2 rounded-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-4">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Menu</h2>
        <nav className="flex flex-col space-y-2">
          {navLinks.map((link) => (
            <NavLinkItem
              key={link.href}
              item={link}
              onClick={onClose}
              className="text-gray-800"
            />
          ))}
        </nav>
      </div>
    </div>
  </div>
);

const DesktopNav: FC = () => (
  <nav className="hidden md:flex space-x-4">
    {navLinks.map((link) => (
      <NavLinkItem key={link.href} item={link} className="text-white" />
    ))}
  </nav>
);

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-sm font-bold">
          <Link href="/">Game of Thrones Assist App</Link>
        </div>
        <LanguageSwitcher />
        <DesktopNav />
        <button
          type="button"
          aria-label="Открыть меню"
          className="md:hidden"
          onClick={handleDrawerOpen}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Drawer menu */}
      <LeftDrawer isOpen={drawerOpen} onClose={handleDrawerClose} />
    </header>
  );
};

export default NavBar;
