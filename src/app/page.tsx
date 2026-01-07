"use client";

import { useEffect, useState } from "react";

import { Video, MessageCircle, Phone, Hand, Activity } from "lucide-react";
import Image from "next/image";
import Dandelion from "@/components/Dandelion";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappNumber = "+971505206141";
  const zoomLink =
    "https://us02web.zoom.us/j/86180541699?pwd=mjVzy7Lnd7iiNltevbZQzU8cujsc22.1";

  useEffect(() => {
    // Script de SimplePractice
    const script = document.createElement("script");
    script.src = "https://www.simplepractice.com/scheduling_widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="opacity-40 absolute top-40 ">
        <Dandelion size={450} interval={500} />
      </div>
      {/* Hero Section */}
      <section className="bg-linear-to-br from-olive to-sand py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-sand mb-4 leading-tight">
                Recupera tu bienestar
              </h1>
              <p className="text-2xl text-sand mb-8">
                At Connected Beings Coaching Services, we offer practical
                skillstraining and collaborative goal-setting designed to
                enhance emotional, behavioral, and executive functioning. Our
                experienced and qualified family coach works with you to build a
                step-by-step action plan aimed at strengthening relational
                bonds, improving emotional regulation, cultivating effective
                parenting practices and navigating life transitions together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={"/zoom"}>
                  <div className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-linear-to-r from-brown to-brown text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    <Video size={20} />
                    Agendar Zoom
                  </div>
                </Link>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-warm-write text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 hover:shadow-md transition-all"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-2xl p-8 shadow-2xl">
              <div className="relative aspect-4/3 bg-linear-to-br from-sand to-sand rounded-xl overflow-hidden">
                <Image
                  fill
                  src="/img2.png"
                  alt="Fisioterapia profesional"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 bg-white">
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
                  "Individual Coaching: Individualized support to increase personal growth and self-discovery through a thought provoking, creative and skill building process. Couples Coaching: Cultivate intentional connection and communication to master the dialogue of partnership within the context of a repairing experience. Family Coaching: Empowering parents and children with evidence based tools to overcome emotional and developmental changes and optimize collective functioning.",
              },
              {
                icon: <Activity size={24} />,
                title: "Support Groups Coaching:",
                description:
                  "Support Groups Coaching: Small-group coaching sessions that leverage the power of a shared interest to build an effective action plan for personal and family success.",
              },
              {
                icon: <Activity size={24} />,
                title: "Packages:",
                description:
                  "Starter: A gateway for those beginning their coaching journey. Three 60- minute sessions for 2800 AED Short term: For shorter-term goals and immediate transformation. Six 60- minute sessions for 4800 AED Ongoing: A deeper long term commitment for growth. Ten 60-minute sessions for 7200 AED. Community groups: For individuals to connect with others who share similar experiences. Six 75- minute group sessions for 750AED.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:-translate-y-2 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-linear-to-br from-olive to-sand rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-xl ">{service.description}</p>
                <Link
                  href="/contact"
                  className="text-teal-600 font-semibold hover:underline"
                >
                  Más información →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* practice app */}
        <div className="flex justify-center mt-28 ">
          <Link href={"/zoom"}>
            <div className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-linear-to-r from-brown to-brown text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <Video size={20} />
                Schedule an appointment
            </div>
          </Link>
        </div>
      </section>
      {/* About Section */}
      <section
        id="sobre-mi"
        className="py-20 bg-linear-to-br from-olive to-neutral-400"
      >
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-2/3 bg-linear-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center text-gray-500 overflow-hidden">
              <Image
                fill
                src="/img3.png"
                alt="Fisioterapia profesional"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-sand mb-6">
                Sobre Mí
              </h2>
              <p className="text-2xl text-sand mb-4 ">
                Welcome. I am Camila Barreto, a psychotherapist and family coach
                dedicated to providing caring, compassionate and deeply attuned
                emotional, behavioral and executive functioning support. My
                mission is to help individuals, couples and families alleviate
                emotional pain while fostering a clearer, more profound
                awareness of themselves and their life experiences that supports
                meaningful change and conscious transformation.
              </p>
              <p className="text-2xl text-sand mb-4">
                My approach integrates a multicultural perspective and global
                worldview. By integrating the warmth and collective values of my
                Colombian roots with a rigorous clinical training in the United
                States and a profound respect for the cultural nuances of Middle
                Eastern life, I offer a reflective space where every family
                feels truly seen. I am committed to provide life coaching
                support that honors your heritage, your unique circumstances,
                and prioritizes your voice in the healing process.
              </p>
              <p className="text-2xl text-sand">
                I have extensive training and experience treating mood
                disorders, attachment difficulties, traumatic experiences,
                challenging behaviors in childhood and adolescence,
                neurodivergent parenting, marital discord, third culture
                adjustment and family stress. I have worked in a variety of
                settings including in person and teletherapy private practice,
                non-profit mental health organizations, public and private
                school settings and after school programs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
