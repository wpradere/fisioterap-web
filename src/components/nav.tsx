"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Video,
  MessageCircle,
  Phone,
  Hand,
  Activity,
  Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className=" bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex justify-between items-center h-35">
            {/* Logo */}
            <div className="flex items-center mb-6 ">
              <div>
                <Link href={"/"}>
                  <Image
                    width={300}
                    height={120}
                    src={"/logo3.png"}
                    alt="Fisioterapia profesional"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              <Link
                href={"/"}
                className="text-gray-600 hover:text-sand font-medium transition-colors text-2xl"
              >
                Home
              </Link>
              <Link
                href={"/about-us"}
                className="text-gray-600 hover:text-sand font-medium transition-colors text-2xl"
              >
                About Us
              </Link>
              <Link
                href={"/services"}
                className="text-gray-600 hover:text-sand font-medium transition-colors text-2xl"
              >
                Services
              </Link>
                <Link
                href={"/faq"}
                className="text-gray-600 hover:text-sand font-medium transition-colors text-2xl"
              >
                FAQ
              </Link>

              <Link
                href={"/contact"}
                className="text-gray-600 hover:text-sand font-medium transition-colors text-2xl"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-3">
              <a
                href="#inicio"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-teal-600 font-medium"
              >
                Home
              </a>
              <a
                href="#servicios"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-teal-600 font-medium"
              >
                Services
              </a>
              <a
                href="#sobre-mi"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-teal-600 font-medium"
              >
                About Us
              </a>
              <a
                href="#contacto"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-teal-600 font-medium"
              >
                Contact
              </a>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
}
