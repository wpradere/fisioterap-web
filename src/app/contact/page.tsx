import React from "react";
import Image from "next/image";
import { Video, MessageCircle} from "lucide-react";
import Link from "next/link";

export default function Page() {
  const whatsappNumber = "+971505206141";
  const zoomLink =
    "https://us02web.zoom.us/j/86180541699?pwd=mjVzy7Lnd7iiNltevbZQzU8cujsc22.1";
  return (
    <div>
      <div className="flex  justify-center items-center max-w-full mx-auto  p-10 py-20 bg-linear-to-r from-soft-clay to-soft-clay text-white text-center">
        <div className=" bg-linear-to-br from-sand to-sand rounded-xl overflow-hidden ">
          <Image
            width={750}
            height={250}
            src="/img2.png"
            alt="Fisioterapia profesional"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-3xl">
            <div className="p-10 font-button font-bold  ">
              <h1>
                Conveniently located at Masdar City, we provide a private and
                welcoming setting for individuals, couples and families who want
                to improve their overall wellbeing and regain a greater sense of
                control and confidence in their personal lives.
              </h1>
            </div>
            <div className="p-10 text-3xl  ">
              <p>
                {" "}
                Address: MBZUAI, Building 1A, Podium Level, Unit G-12 (across
                from Simply Thai) Masdar City, Abu Dhabi
              </p>
              <p> Phone: (971) 0505206141</p>
              <p> Email : connectedbeings@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="p-2">
              <Link
                href={"/zoom"}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-warm-write text-gray-900 font-semibold rounded-lg hover:shadow-xl transition-all font-button "
              >
                <Video size={20} />
                Zoom meeting
              </Link>
            </div>
            <div className="p-2">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 p-3 px-6 py-3.5 bg-olive text-gray-900 font-semibold rounded-lg border-2 border-soft-clay hover:border-olive hover:text-soft-clay hover:shadow-md transition-all  font-button"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
