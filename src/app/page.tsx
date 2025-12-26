"use client";

import { useEffect, useState } from "react";

import {
  Video,
  MessageCircle,
  Phone,
  Hand,
  Activity,
  
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappNumber = "573001234567";
  const zoomLink = "https://zoom.us/tu-enlace";

  useEffect(() => {
    // Script de SimplePractice
    const script = document.createElement("script");
    script.src = "https://www.simplepractice.com/scheduling_widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-olive to-sand py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Recupera tu bienestar
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Fisioterapia profesional personalizada para tu salud y calidad
                de vida
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={zoomLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-linear-to-r from-brown to-brown text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <Video size={20} />
                  Agendar Zoom
                </a>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-warm-write text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 hover:shadow-md transition-all"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-2xl p-8 shadow-2xl">
              <div className="relative aspect-4/3 bg-linear-to-br from-sand to-sand rounded-xl overflow-hidden">
                <Image
                  fill
                  src="/img2.png"
                  alt="Fisioterapia profesional"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Hand size={24} />,
                title: "Terapia Manual",
                description:
                  "Tratamiento especializado mediante técnicas manuales para aliviar el dolor y mejorar la movilidad.",
              },
              {
                icon: <Activity size={24} />,
                title: "Rehabilitación",
                description:
                  "Programas personalizados de rehabilitación post-operatoria y recuperación de lesiones.",
              },
              {
                icon: <Activity size={24} />,
                title: "Rehabilitación",
                description:
                  "Programas personalizados de rehabilitación post-operatoria y recuperación de lesiones.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:-translate-y-2 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-linear-to-br from-olive to-sand rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#"
                  className="text-teal-600 font-semibold hover:underline"
                >
                  Más información →
                </a>
              </div>
            ))}          
          </div>
        </div>

          {/* practice app */}
            <div className="flex justify-center mt-28 ">
              <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 hover:shadow-md transition-all bg-soft-clay"
                >
                  <MessageCircle size={20}  />
                  Agendar Cita 
                </a>
            </div>
      </section>
      {/* About Section */}
      <section
        id="sobre-mi"
        className="py-20 bg-linear-to-br from-olive to-sand"
      >
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-3/3 bg-linear-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center text-gray-500 overflow-hidden">
              <Image
                  fill
                  src="/img3.png"
                  alt="Fisioterapia profesional"
                  className="object-cover"
                  
                />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sobre Mí
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Soy fisioterapeuta certificada con más de 10 años de experiencia
                ayudando a personas a recuperar su bienestar y calidad de vida.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Mi enfoque se basa en tratamientos personalizados que combinan
                las mejores técnicas de fisioterapia moderna con un trato
                cercano y profesional.
              </p>
              <p className="text-lg text-gray-600">
                Estoy comprometida con tu recuperación y bienestar, ofreciendo
                consultas tanto presenciales como virtuales para adaptarme a tus
                necesidades.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contacto"
        className="py-20 bg-linear-to-r from-brown to-brown text-white text-center"
      >
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Listo para comenzar tu recuperación?
          </h2>
          <p className="text-xl mb-8 text-teal-50">
            Agenda tu primera consulta hoy mismo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={zoomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:shadow-xl transition-all"
            >
              <Video size={20} />
              Reunión por Zoom
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-all"
            >
              <Phone size={20} />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
