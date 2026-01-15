'use client';

import React from "react";
import { Video, Hand, Activity, ShieldUser } from "lucide-react";
import Link from "next/link";

export default function page() {
  const handleBooking = () => {
    // Abre el enlace de reserva de SimplePractice
    window.open("TU_ENLACE_DE_SIMPLEPRACTICE", "_blank");
  };

  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Hand size={24} />,
                title: "Individual Coaching:",
                description:
                  "Individual Coaching: Individualized support to increase personal growth and self-discovery through a thought provoking, creative and skill building process.",
              },
              {
                icon: <Activity size={24} />,
                title: "Couples Coaching:",
                description:
                  "Cultivate intentional connection and communication to master the dialogue of partnership within the context of a repairing experience.",
              },
              {
                icon: <ShieldUser size={24} />,
                title: "Family Coaching:",
                description:
                  "Empowering parents and children with evidence based tools to overcome emotional and developmental changes and optimize collective functioning.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:-translate-y-2 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-linear-to-br from-soft-clay to-soft-clay rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-xl font-button font-bold tracking-wide ">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="text-soft-clay font-semibold hover:underline"
                >
                  More information →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto px-5 ">
          <div className="mb-4 ">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
              Packages:{" "}
            </h2>

            <h3 className="text-gray-600 mb-4 text-xl font-button font-bold tracking-wide pb-20 ">
              Starter: A gateway for those beginning their coaching journey.
              Three 60- minute sessions for 2800 AED Short term: For
              shorter-term goals and immediate transformation. Six 60- minute
              sessions for 4800 AED Ongoing: A deeper long term commitment for
              growth. Ten 60-minute sessions for 7200 AED. Community groups: For
              individuals to connect with others who share similar experiences.
              Six 75- minute group sessions for 750AED.
            </h3>
          </div>
        </div>
        {/* practice app */}
        <div className="flex justify-center pb-14 ">
          <button
            onClick={handleBooking}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-linear-to-r from-brown to-brown text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all  font-button "
          >
            Schedule an appointment
          </button>
        </div>
      </section>
    </div>
  );
}
