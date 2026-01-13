"use client";

import { useEffect } from "react";
import { Video, MessageCircle} from "lucide-react";
import Image from "next/image";

import Link from "next/link";
import FlyingLeaves from "@/components/FlyingLeaves";

export default function Home() {
  

  const whatsappNumber = "+971505206141";

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
      <section className="bg-linear-to-br from-soft-clay to-soft-clay py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className=" opacity-25 absolute inset-0 overflow-hidden pointer-events-none">
              <FlyingLeaves />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-sand mb-4 leading-tight">
                Recover your well-being
              </h1>
              <p className="text-2xl text-sand mb-8 font-button font-bold tracking-wide">
                At Connected Beings Coaching Services, we offer practical
                skillstraining and collaborative goal-setting designed to
                enhance emotional, behavioral, and executive functioning. Our
                experienced and qualified family coach works with you to build a
                step-by-step action plan aimed at strengthening relational
                bonds, improving emotional regulation, cultivating effective
                parenting practices and navigating life transitions together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 font-light">
                <Link href={"contact"}>
                  <div className="inline-flex   items-center justify-center gap-2 px-6 py-3.5 bg-linear-to-r from-brown to-brown text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all   font-button">
                    <Video size={20} />
                    Schedule Zoom
                  </div>
                </Link>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-warm-write text-gray-900 font-semibold rounded-lg border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 hover:shadow-md transition-all  font-button"
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
    </div>
  );
}
