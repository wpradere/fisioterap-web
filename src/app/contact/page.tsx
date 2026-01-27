"use client";

import React from "react";
import Image from "next/image";
import { Video, MessageCircle} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
  const whatsappNumber = "+971505206141";
  const { t } = useLanguage();

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center max-w-full mx-auto p-6 md:p-10 py-20 bg-linear-to-r from-soft-clay to-soft-clay text-white text-center">
        <div className="bg-linear-to-br from-sand to-sand rounded-xl overflow-hidden w-full md:w-[600px] lg:w-[800px] xl:w-[750px] mb-8 md:mb-0 shrink-0">
        <Link
          href={"https://maps.app.goo.gl/jiWLdbxgAszPFdob9"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={900}
            height={400}
            src="/map.png"
            alt="Mapa de ubicacion"
            className="w-full h-auto"
          />
        </Link>
        </div>
        <div className="flex flex-col">
          <div className="text-3xl">
            <div className="p-10 font-button font-bold  ">
              <h1>
                {t("contact.location")}
              </h1>
            </div>
            <div className="p-10 text-lg">
              <p>
                <span className="font-dream">{t("contact.addressLabel")}</span>{" "}
                <span className="font-lato tracking-wide">{t("contact.addressValue")}</span>
              </p>
              <p>
                <span className="font-dream">{t("contact.phoneLabel")}</span>{" "}
                <span className="font-lato tracking-wide">{t("contact.phoneValue")}</span>
              </p>
              <p>
                <span className="font-dream">{t("contact.emailLabel")}</span>{" "}
                <span className="font-lato tracking-wide">{t("contact.emailValue")}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-start ml-10">
            <div className="p-2">
              <Link
                href={"/zoom"}
                className="inline-flex w-full sm:w-44 h-12 items-center justify-center gap-2 text-white font-semibold bg-stone-600 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all font-button"
              >
                <Video size={20} />
                {t("contact.zoomMeeting")}
              </Link>
            </div>
            <div className="p-2">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-44 h-12 items-center justify-center gap-2 bg-warm-write text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 hover:shadow-md transition-all font-button"
              >
                <MessageCircle size={20} />
                {t("home.whatsapp")}
              </a>
            </div>
            <div className="p-2">
              <Link
                href="https://camila-barreto.clientsecure.me"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="inline-flex w-full sm:w-44 h-12 items-center justify-center gap-2 bg-linear-to-r from-brown to-brown text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all font-button"
              >
                {t("services.scheduleAppointment")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
