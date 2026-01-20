"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Page() {
  const { t } = useLanguage();

  return (
    <div>
      <section
        id="sobre-mi"
        className="py-20 bg-linear-to-br from-soft-clay to-soft-clay"
      >
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-2/3 bg-linear-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center text-gray-500 overflow-hidden">
              <Image
                fill
                src="/imagen2.png"
                alt="Fisioterapia profesional"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-sanddark mb-6 ">
                {t("about.title")}
              </h2>
              <p className="text-xl text-sanddark mb-4  font-button font-bold tracking-wide">
                {t("about.intro1")}
              </p>
              <p className="text-xl text-sanddark mb-4 font-button font-bold tracking-wide">
                {t("about.intro2")}
              </p>
              <p className="text-xl text-sanddark font-button font-bold tracking-wide">
                {t("about.intro3")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
