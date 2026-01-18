"use client";

import React, { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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
            <nav className="hidden md:flex gap-8 items-center">
              <Link
                href={"/"}
                className="text-gray-600 hover:text-sand font-medium transition-colors text-2xl"
              >
                {t("nav.home")}
              </Link>
              <Link
                href={"/about-us"}
                className="text-gray-600 hover:text-sand font-medium transition-colors text-2xl"
              >
                {t("nav.aboutUs")}
              </Link>
              <Link
                href={"/services"}
                className="text-gray-600 hover:text-sand font-medium transition-colors text-2xl"
              >
                {t("nav.offerings")}
              </Link>
              <Link
                href={"/packages"}
                className="text-gray-600 hover:text-sand font-medium transition-colors text-2xl"
              >
                {t("nav.packages")}
              </Link>
              <Link
                href={"/pacages"}
                className="text-gray-600 hover:text-sand font-medium transition-colors text-2xl"
              >
                {t("nav.products")}
              </Link>
              <Link
                href={"/faq"}
                className="text-gray-600 hover:text-sand font-medium transition-colors text-2xl"
              >
                {t("nav.qa")}
              </Link>

              <Link
                href={"/contact"}
                className="text-gray-600 hover:text-sand font-medium transition-colors text-2xl"
              >
                {t("nav.contact")}
              </Link>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-1 text-gray-600 hover:text-sand transition-colors p-2"
                  aria-label="Change language"
                >
                  <Globe size={24} />
                  <span className="text-sm font-medium uppercase">{language}</span>
                </button>
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-[120px]">
                    <button
                      onClick={() => {
                        setLanguage("en");
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                        language === "en" ? "text-sand font-semibold" : "text-gray-600"
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("es");
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                        language === "es" ? "text-sand font-semibold" : "text-gray-600"
                      }`}
                    >
                      Español
                    </button>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              {/* Mobile Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-1 text-gray-600 hover:text-sand transition-colors p-2"
                  aria-label="Change language"
                >
                  <Globe size={20} />
                  <span className="text-xs font-medium uppercase">{language}</span>
                </button>
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-1 min-w-[120px] z-50">
                    <button
                      onClick={() => {
                        setLanguage("en");
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                        language === "en" ? "text-sand font-semibold" : "text-gray-600"
                      }`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("es");
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                        language === "es" ? "text-sand font-semibold" : "text-gray-600"
                      }`}
                    >
                      Español
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4 space-y-3">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-teal-600 font-medium"
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/about-us"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-teal-600 font-medium"
              >
                {t("nav.aboutUs")}
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-teal-600 font-medium"
              >
                {t("nav.services")}
              </Link>
              <Link
                href="/packages"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-teal-600 font-medium"
              >
                {t("nav.packages")}
              </Link>
              <Link
                href="/faq"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-teal-600 font-medium"
              >
                {t("nav.qa")}
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-teal-600 font-medium"
              >
                {t("nav.contact")}
              </Link>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
}
