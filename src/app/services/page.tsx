'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Offerings() {
  const { t } = useLanguage();

  const handleBooking = () => {
    window.open("https://camila-barreto.clientsecure.me", "_blank");
  };

  const services = [
    {
      iconPath: "/Individual Icon.svg",
      titleKey: "services.individual.title",
      introKey: "services.individual.intro",
      subtitleKey: "services.individual.subtitle",
      goalKeys: [
        "services.individual.goal1",
        "services.individual.goal2",
        "services.individual.goal3",
        "services.individual.goal4",
        "services.individual.goal5",
        "services.individual.goal6"
      ]
    },
    {
      iconPath: "/Couples  Icon.svg",
      titleKey: "services.couples.title",
      introKey: "services.couples.intro",
      subtitleKey: "services.couples.subtitle",
      goalKeys: [
        "services.couples.goal1",
        "services.couples.goal2",
        "services.couples.goal3",
        "services.couples.goal4",
        "services.couples.goal5",
        "services.couples.goal6"
      ]
    },
    {
      iconPath: "/Family  Icon.svg",
      titleKey: "services.family.title",
      introKey: "services.family.intro",
      subtitleKey: "services.family.subtitle",
      goalKeys: [
        "services.family.goal1",
        "services.family.goal2",
        "services.family.goal3",
        "services.family.goal4",
        "services.family.goal5",
        "services.family.goal6"
      ]
    },
    {
      iconPath: "/Groups Icon.svg",
      titleKey: "services.groups.title",
      introKey: "services.groups.intro",
      subtitleKey: "services.groups.subtitle",
      goalKeys: [
        "services.groups.goal1",
        "services.groups.goal2",
        "services.groups.goal3",
        "services.groups.goal4",
        "services.groups.goal5",
        "services.groups.goal6"
      ]
    },
  ];

  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            {t("services.title")}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className=" p-8 rounded-xl hover:-translate-y-2 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-linear-to-br from-soft-clay to-soft-clay rounded-lg flex items-center justify-center text-white mb-4">
                  <Image
                    src={service.iconPath}
                    alt={t(service.titleKey)}
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {t(service.titleKey)}
                </h3>
                <div className="text-gray-600 mb-4 text-xl font-button font-bold tracking-wide">
                  <p className="mb-1">{t(service.introKey)}</p>
                  <p className="mb-1">{t(service.subtitleKey)}</p>
                  <ul className="list-disc list-inside space-y-1 text-lg">
                    {service.goalKeys.map((goalKey, i) => (
                      <li key={i}>{t(goalKey)}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="text-soft-clay font-semibold hover:underline"
                >
                  {t("services.moreInfo")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center pb-14 ">
          <button
            onClick={handleBooking}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-linear-to-r from-brown to-brown text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all  font-button "
          >
            {t("services.scheduleAppointment")}
          </button>
        </div>
      </section>
    </div>
  );
}
