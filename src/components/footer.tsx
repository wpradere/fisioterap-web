import React, { useState } from "react";

export default function Footer() {
  
  return (
    <div>
<footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">FisioSalud</h3>
              <p className="text-gray-400">
                Fisioterapia profesional para tu bienestar
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#inicio" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#sobre-mi" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Sobre Mí
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contacto@fisiosalud.com</li>
                <li>Tel: +57 300 123 4567</li>
                <li>Bogotá, Colombia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 FisioSalud. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
