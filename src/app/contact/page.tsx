import React from "react";
import Image from "next/image";
import { Video, MessageCircle, Phone, Hand, Activity } from "lucide-react";

export default function Page() {
  const whatsappNumber = "+971505206141";
  const zoomLink =
    "https://us02web.zoom.us/j/86180541699?pwd=mjVzy7Lnd7iiNltevbZQzU8cujsc22.1";
  return (
    <div>
      <div className="flex  justify-center items-center max-w-full mx-auto  p-10 py-20 bg-linear-to-r from-brown to-brown text-white text-center">
        <div className=" bg-linear-to-br from-sand to-sand rounded-xl overflow-hidden ">
          <Image
            width={750}
            height={250}
            src="/img2.png"
            alt="Fisioterapia profesional"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-3xl">
            <div className="p-10 ">
              <h1>
                Con una ubicación privilegiada en Masdar City, ofrecemos un
                entorno privado y acogedor para personas, parejas y familias que
                desean mejorar su bienestar general y recuperar una mayor
                sensación de control y confianza en sus vidas personales.
              </h1>
            </div>
            <div className="p-10 text-3xl  ">
              <p>
                {" "}
                Address: MBZUAI, Building 1A, Podium Level, Unit G-12 (across
                from Simply Thai) Masdar City, Abu Dhabi
              </p>
              <p> Phone: (971) 0505206141</p>
              <p> Email : connectedbeings@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="p-2">
              <a
                href={zoomLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-soft-clay text-gray-900 font-semibold rounded-lg hover:shadow-xl transition-all"
              >
                <Video size={20} />
                Reunión por Zoom
              </a>
            </div>
            <div className="p-2">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 p-3 px-6 py-3.5 bg-olive text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 hover:shadow-md transition-all"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
