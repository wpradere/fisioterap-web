"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, Video } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

    const whatsappNumber = "+971505206141";

  const faqs = [
    { questionKey: "faq.q1", answerKey: "faq.a1" },
    { questionKey: "faq.q2", answerKey: "faq.a2" },
    { questionKey: "faq.q3", answerKey: "faq.a3" },
    { questionKey: "faq.q4", answerKey: "faq.a4" },
    { questionKey: "faq.q5", answerKey: "faq.a5" },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-soft-clay  to-soft-clay ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-sanddark mb-4 ">
            {t("faq.title")}
          </h1>
          <p className="text-base sm:text-lg text-sanddark max-w-2xl mx-auto font-button font-bold tracking-wide">
            {t("faq.subtitle")}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-sand backdrop-blur-sm rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-inset"
              >
                <span className="text-base sm:text-lg font-light text-stone-800 pr-4 font-button font-bold tracking-wide">
                  {t(faq.questionKey)}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-stone-600 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-sm sm:text-base text-stone-600 leading-relaxed font-button font-bold tracking-wide">
                  {t(faq.answerKey)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sanddark mb-6 text-base sm:text-2xl font-button font-bold tracking-wide">
            {t("faq.stillQuestions")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
            <Link
              href={"/zoom"}
              className="inline-flex w-full sm:w-44 h-12 items-center justify-center gap-2 text-white font-semibold bg-stone-600 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all font-button"
            >
              <Video size={20} />
              {t("contact.zoomMeeting")}
            </Link>
                <Link
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-44 h-12 items-center justify-center gap-2 bg-warm-write text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 hover:shadow-md transition-all font-button"
              >
                <MessageCircle size={20} />
                {t("home.whatsapp")}
              </Link>
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
  );
}
