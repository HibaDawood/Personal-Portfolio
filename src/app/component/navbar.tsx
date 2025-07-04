"use client";

import type React from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-white text-2xl pl-8 font-bold">
          Hiba M.Dawood
        </Link>

        <div className="hidden md:flex items-center space-x-8 pr-10 text-lg font-bold">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/skill">Skills</NavLink>
          <NavLink href="/Contact">Contact</NavLink>
        </div>

        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm py-4"
        >
          <div className="flex flex-col items-center space-y-4">
            <NavLink href="/" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink href="/about" onClick={toggleMenu}>
              About
            </NavLink>
            <NavLink href="/projects" onClick={toggleMenu}>
              Projects
            </NavLink>
            <NavLink href="/skill" onClick={toggleMenu}>
              Skills
            </NavLink>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-white transition-colors relative group"
      onClick={onClick}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </Link>
  );
}
