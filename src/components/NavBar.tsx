"use client";
import "@/i18n/i18n-client";
import React, { FC, useState } from "react";
import Link from "next/link";
import type { NavLink } from "../types";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const navLinks: NavLink[] = [
  { label: "home", href: "/" },
  { label: "rules", href: "/rules" },
  { label: "faq", href: "/faq" },
  { label: "hints", href: "/hints" },
  { label: "extra", href: "/extra" },
  { label: "cards", href: "/cards" },
];

const LanguageSwitcher: FC = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const handleSwitch = (lang: string) => {
    i18n.changeLanguage(lang);
    router.refresh();
  };

  const currentLang = i18n.language;

  return (
    <div className="flex">
      <button
        onClick={() => handleSwitch("en")}
        className={`px-1 border rounded-l-lg hover:bg-gray-200 ${
          currentLang === "en"
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
          currentLang === "ru"
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
}> = ({ item, onClick, className = "" }) => {
  const { t } = useTranslation();
  return (
    // Using the new Next.js Link behavior without a nested <a> tag.
    <Link
      href={item.href}
      onClick={onClick}
      className={`hover:underline ${className}`}
    >
      {t(`nav.${item.label}`)}
    </Link>
  );
};

const LeftDrawer: FC<DrawerProps> = ({ isOpen, onClose }) => (
  <div
    className={`fixed inset-0 z-40 transition-opacity duration-300 ${
      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
    onClick={onClose}
  >
    <div
      className="absolute inset-0 bg-black/40" // затемняющий фон под drawer
      aria-hidden="true"
    />
    <div
      className={`absolute top-0 right-0 w-64 h-1/2 bg-white shadow-lg m-2 rounded-lg transform transition-transform duration-300 ${
        isOpen ? "-translate-x-0" : "translate-x-full"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-6">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Menu</h2>
        <nav className="flex flex-col space-y-5">
          {navLinks.map((link) => (
            <NavLinkItem
              key={link.href}
              item={link}
              onClick={onClose}
              className="text-lg text-gray-800 hover:outline"
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

  const { t } = useTranslation();

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-sm font-bold ">
          <Link href="/" className=" text-lg auto-wrap">
            {t("appTitle")}
          </Link>
        </div>
        <LanguageSwitcher />
        <DesktopNav />
        <button
          type="button"
          aria-label="Открыть меню"
          className="md:hidden"
          onClick={() => setDrawerOpen(true)}
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
      <LeftDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
};

export default NavBar;
