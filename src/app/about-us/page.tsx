import React from 'react'
import Image from "next/image";

export default function Page() {
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
                src="/img5.png"
                alt="Fisioterapia profesional"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-sanddark mb-6 ">
                About Us
              </h2>
              <p className="text-2xl text-sanddark mb-4  font-button font-bold tracking-wide">
                Welcome. I am Camila Barreto, a psychotherapist and family coach
                dedicated to providing caring, compassionate and deeply attuned
                emotional, behavioral and executive functioning support. My
                mission is to help individuals, couples and families alleviate
                emotional pain while fostering a clearer, more profound
                awareness of themselves and their life experiences that supports
                meaningful change and conscious transformation.
              </p>
              <p className="text-2xl text-sanddark mb-4 font-button font-bold tracking-wide">
                My approach integrates a multicultural perspective and global
                worldview. By integrating the warmth and collective values of my
                Colombian roots with a rigorous clinical training in the United
                States and a profound respect for the cultural nuances of Middle
                Eastern life, I offer a reflective space where every family
                feels truly seen. I am committed to provide life coaching
                support that honors your heritage, your unique circumstances,
                and prioritizes your voice in the healing process.
              </p>
              <p className="text-2xl text-sanddark font-button font-bold tracking-wide">
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
  )
}
