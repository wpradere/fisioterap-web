"use client";

import { Video, MessageCircle } from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import FlyingLeaves from "@/components/FlyingLeaves";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const whatsappNumber = "+971505206141";
  const { t } = useLanguage();

  return (
    <div>
      <section className="bg-linear-to-br from-soft-clay to-soft-clay py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className=" opacity-25 absolute inset-0 overflow-hidden pointer-events-none">
              <FlyingLeaves />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-sanddark mb-4 leading-tight text-center">
                {t("home.tagline")}
              </h1>
              <p className="text-2xl text-sanddark mb-8 font-button font-bold tracking-wide">
                {t("home.intro1")}
              </p>
              <p className="text-2xl text-sanddark mb-8 font-button font-bold tracking-wide">
                {t("home.intro2")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 font-light justify-start">
                <Link href="https://camila-barreto.clientsecure.me" className="w-full sm:w-auto">
                  <div className="inline-flex w-full sm:w-44 h-12 items-center justify-center gap-2 bg-linear-to-r from-brown to-brown text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all font-button">
                    <Video size={20} />
                    {t("services.scheduleAppointment")}
                  </div>
                </Link>
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
            </div>
            <div className="rounded-2xl p-8 shadow-2xl bg-sand">
              <div className="relative aspect-4/3 bg-linear-to-br from-sand to-sand rounded-xl overflow-hidden">
                <Image
                  fill
                  src="/imagen1.png"
                  alt="Fisioterapia profesional"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
