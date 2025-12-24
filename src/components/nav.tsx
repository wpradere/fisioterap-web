'use client';

import React, { useState } from 'react'
import { Menu, X, Video, MessageCircle, Phone, Hand, Activity, Heart } from 'lucide-react';
import Image from 'next/image';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
return (
    <div className=" bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div>
                <Image 
                  width={150}
                  height={100}
                  src={"/logo1.png"}
                   alt="Fisioterapia profesional"
                />
              </div>
              <span className="text-2xl font-bold text-gray-900">FisioSalud</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              <a href="#inicio" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
                Servicios
              </a>
              <a href="#sobre-mi" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
                Sobre Mí
              </a>
              <a href="#contacto" className="text-gray-600 hover:text-teal-600 font-medium transition-colors">
                Contacto
              </a>
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
                Inicio
              </a>
              <a
                href="#servicios"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-teal-600 font-medium"
              >
                Servicios
              </a>
              <a
                href="#sobre-mi"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-teal-600 font-medium"
              >
                Sobre Mí
              </a>
              <a
                href="#contacto"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-600 hover:text-teal-600 font-medium"
              >
                Contacto
              </a>
            </nav>
          )}
        </div>
      </header>    
    </div>
  );
}
