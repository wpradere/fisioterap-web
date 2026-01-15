"use client"

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Page() {
const [openIndex, setOpenIndex] = useState<number | null>(null);

   const faqs = [
    {
      question: "What is coaching and how can it help me?",
      answer: "Coaching is a collaborative process that helps you identify and achieve your personal and professional goals. Our experienced family coach works with you to build practical skills, strengthen relationships, improve emotional regulation, and navigate life transitions effectively."
    },
    {
      question: "How long does a coaching session last?",
      answer: "A typical coaching session lasts 60 minutes. We recommend starting with weekly sessions, though the frequency can be adjusted based on your needs and goals. We work together to create a personalized plan that fits your schedule."
    },
    {
      question: "Is coaching confidential?",
      answer: "Yes, absolutely. All coaching sessions are completely confidential. We maintain strict privacy standards to ensure you feel safe and comfortable sharing openly during our work together."
    },
    {
      question: "What&apos;s the difference between coaching and therapy?",
      answer: "While both are valuable, coaching focuses on the present and future, helping you achieve specific goals and develop practical skills. Therapy often addresses past experiences and clinical mental health concerns. Coaching is action-oriented and goal-focused."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply click the 'Schedule Zoom' or 'WhatsApp' button to book your initial consultation. We'll discuss your goals, answer any questions, and create a customized coaching plan for you."
    }
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
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-sanddark max-w-2xl mx-auto font-button font-bold tracking-wide">
            Find answers to common questions about our coaching services
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
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-stone-600 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-sm sm:text-base text-stone-600 leading-relaxed font-button font-bold tracking-wide">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sanddark mb-6 text-base sm:text-2xl font-button font-bold tracking-wide">
            Still have questions? We re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-stone-600 text-white rounded-md hover:bg-stone-700 transition-colors duration-300 font-light w-full sm:w-auto">
              Schedule Zoom
            </button>
            <button className="px-8 py-3 bg-white text-stone-700 border border-stone-300 rounded-md hover:bg-stone-50 transition-colors duration-300 font-light w-full sm:w-auto">
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
