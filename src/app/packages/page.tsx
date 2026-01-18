"use client";

import React from 'react'
import { useLanguage } from '@/context/LanguageContext';

export default function Packages() {
  const { t } = useLanguage();

  const packages = [
    {
      titleKey: "packages.starter.title",
      descriptionKey: "packages.starter.description",
      priceKey: "packages.starter.price"
    },
    {
      titleKey: "packages.shortterm.title",
      descriptionKey: "packages.shortterm.description",
      priceKey: "packages.shortterm.price"
    },
    {
      titleKey: "packages.ongoing.title",
      descriptionKey: "packages.ongoing.description",
      priceKey: "packages.ongoing.price"
    },
    {
      titleKey: "packages.supportgroups.title",
      descriptionKey: "packages.supportgroups.description",
      priceKey: "packages.supportgroups.price"
    }
  ];

  return (
    <section className="bg-gray-50">
      <div className="px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12 mt-5">
          {t("packages.title")}
        </h2>
        <div className="grid md:grid-rows-3 gap-8 justify-center">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="p-8 rounded-xl hover:-translate-y-2 hover:shadow-xl transition-all bg-sand mb-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {t(pkg.titleKey)}
              </h3>
              <p className="text-gray-600 mb-4 font-button font-bold text-xl">
                {t(pkg.descriptionKey)}
              </p>
              <ul className="list-disc list-inside space-y-1 text-lg font-button font-bold">
                <li>{t(pkg.priceKey)}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
