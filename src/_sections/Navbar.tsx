"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/95 border-b border-red-600 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <span className="text-2xl font-bold z-30 text-red-600 tracking-wider">
          アクソロトル
        </span>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden z-30 p-2 w-10 h-10 text-red-600"
        >
          {isOpen ? (
            <RiCloseLargeFill className="w-6 h-6" />
          ) : (
            <GiHamburgerMenu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLinks text="white" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-black z-20 flex flex-col items-center justify-center text-3xl space-y-6 transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <NavLinks onclick={() => setIsOpen(!isOpen)} text="white" />
      </div>
    </nav>
  );
}

function NavLinks({ text, onclick } : NavLinksType ) {
  const links = [
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Tecnologías", href: "#tecnologias" },
    { label: "Precios", href: "#precios" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onclick}
          className={`hover:text-red-600 transition-colors text-${text}`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
