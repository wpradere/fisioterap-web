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
      <div className="flex  justify-center items-center max-w-full mx-auto  p-10 py-20 bg-linear-to-r from-soft-clay to-soft-clay text-white text-center">
        <div className=" bg-linear-to-br from-sand to-sand rounded-xl overflow-hidden ">
        <Link
          href={"https://www.google.com/maps/place/Simply+Thai+Restaurant+Abu+Dhabi/@24.4337969,54.6176601,21z/data=!4m6!3m5!1s0x3e5e49174ec50009:0x5dbb4cb6c6350f10!8m2!3d24.4338154!4d54.6178254!16s%2Fg%2F11t_zhsc9c?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={750}
            height={250}
            src="/map.png"
            alt="Fisioterapia profesional"
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
            <div className="p-10 text-3xl  ">
              <p>{t("contact.address")}</p>
              <p>{t("contact.phone")}</p>
              <p>{t("contact.email")}</p>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="p-2">
              <Link
                href={"/zoom"}
                className="inline-flex   items-center justify-center gap-2 px-6 py-3.5 bg-linear-to-r from-brown to-brown text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all   font-button"
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-warm-write text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 hover:shadow-md transition-all  font-button"
              >
                <MessageCircle size={20} />
                {t("home.whatsapp")}
              </a>
            </div>
            <div  className="p-2">
              <Link
              href="https://camila-barreto.clientsecure.me"
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-linear-to-r from-brown to-brown text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all  font-button "
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
