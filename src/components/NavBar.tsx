"use client";
import React, { FC, useState } from "react";
import Link from "next/link";
import type { NavLink } from "../types";

// DRY: список навигационных пунктов, используемый в обоих меню
const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Rules", href: "/rules" },
  { label: "FAQ", href: "/faq" },
];

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Универсальный компонент для навигационной ссылки
const NavLinkItem: FC<{ item: NavLink; onClick?: () => void }> = ({
  item,
  onClick,
}) => (
  // Using the new Next.js Link behavior without a nested <a> tag.
  <Link href={item.href} onClick={onClick} className="hover:underline">
    {item.label}
  </Link>
);

// Компонент выдвигающегося меню (drawer) слева
const LeftDrawer: FC<DrawerProps> = ({ isOpen, onClose }) => (
  <div
    className={`fixed inset-0 z-40 transition-opacity duration-300 ${
      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
    onClick={onClose}
  >
    <div
      className={`absolute top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-4">
        <h2 className="mb-4 text-xl font-bold">Menu</h2>
        <nav className="flex flex-col space-y-2">
          {navLinks.map((link) => (
            <NavLinkItem key={link.href} item={link} onClick={onClose} />
          ))}
        </nav>
      </div>
    </div>
  </div>
);

// Компонент навигации для десктопа
const DesktopNav: FC = () => (
  <nav className="hidden md:flex space-x-4">
    {navLinks.map((link) => (
      <NavLinkItem key={link.href} item={link} />
    ))}
  </nav>
);

// Основной компонент навигационной панели
const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Именованные функции для управления состоянием drawer
  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link href="/">Game of Thrones Assist App</Link>
        </div>
        {/* Иконка гамбургера для мобильных устройств */}
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
        {/* Desktop menu */}
        <DesktopNav />
      </div>
      {/* Drawer menu */}
      <LeftDrawer isOpen={drawerOpen} onClose={handleDrawerClose} />
    </header>
  );
};

export default NavBar;
