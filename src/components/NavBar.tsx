"use client";
import "@/i18n/i18n-client";
import React, { FC, useState } from "react";
import Link from "next/link";
import type { NavLink } from "../types";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";
import DonationButton from "./DonationButton";

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

  const languages = [
    { code: "en", flag: "🇺🇸", label: "Switch to English" },
    { code: "ru", flag: "🇷🇺", label: "Переключить на русский" },
  ];

  return (
    <div className="flex gap-1 items-center">
      {languages.map(({ code, flag, label }) => (
        <button
          key={code}
          onClick={() => handleSwitch(code)}
          style={{ width: '2.25rem', height: '2.25rem' }}
          className={`flex items-center justify-center rounded transition-colors
            ${currentLang === code ? 'bg-slate-500' : 'bg-gray-700 hover:bg-gray-600'}`}
          aria-label={label}
        >
          <span role="img" aria-label={label} className="text-2xl leading-none select-none">{flag}</span>
        </button>
      ))}
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
  const pathname = usePathname();
  const isActive = pathname === item.href;
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`
        box-border px-3 py-2 text-xl border-b-2 transition-all duration-300
        border-transparent text-slate-200
        hover:border-sky-400 hover:text-sky-400
        focus:border-sky-400 focus:text-sky-400
        active:border-sky-400 active:text-sky-400
        active:bg-slate-700/30
        ${isActive ? 'border-sky-400 text-sky-400 bg-slate-700/60 rounded-lg' : ''}
        ${className}
      `}
    >
      {t(`nav.${item.label}`)}
    </Link>
  );
};

const LeftDrawer: FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-black/40"
        aria-hidden="true"
      />
      <div
        className={`absolute top-0 right-0 w-64 h-full bg-gray-800 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "-translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <h2 className="mb-6 text-2xl font-bold text-white">Menu</h2>
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <NavLinkItem
                key={link.href}
                item={link}
                onClick={onClose}
                className=""
              />
            ))}
            <div className="mt-4">
              <DonationButton onClick={onClose} compact />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

const NavBar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              {t("appTitle")}
            </Link>
          </div>
<LanguageSwitcher />
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gray-300 transition"
              >
                {t(`nav.${link.label}`)}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <LeftDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </nav>
  );
};

export default NavBar;
