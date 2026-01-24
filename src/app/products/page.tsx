"use client";

import { Construction } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand/30 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="flex justify-center mb-8">
          <div className="bg-sand/20 p-6 rounded-full">
            <Construction className="w-20 h-20 text-brown" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-brown mb-4">
          {t("products.underConstruction")}
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          {t("products.comingSoon")}
        </p>

        <div className="flex justify-center gap-2 mb-8">
          <span className="w-3 h-3 bg-brown rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
          <span className="w-3 h-3 bg-brown rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
          <span className="w-3 h-3 bg-brown rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
        </div>

        <p className="text-gray-500">
          {t("products.checkBack")}
        </p>
      </div>
    </div>
  );
}
