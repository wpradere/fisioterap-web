"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.aboutUs": "About Us",
    "nav.offerings": "Offerings",
    "nav.packages": "Packages",
    "nav.products": "Products",
    "nav.qa": "Q&A",
    "nav.contact": "Contact Us",
    "nav.services": "Offerings",

    // Home
    "home.tagline": "A space for connection and growth",
    "home.intro1": "At Connected Beings Coaching Services, we offer practical skills training and collaborative goal-setting designed to enhance emotional, behavioral, and executive functioning. Our experienced and qualified family coach works with you to build a step-by-step action plan aimed at strengthening relational bonds, improving emotional regulation, cultivating effective parenting practices and navigating life transitions together.",
    "home.intro2": "Conveniently located at Masdar City, we provide a private and welcoming setting for individuals, couples and families who want to improve their overall wellbeing and regain a greater sense of control and confidence in their personal lives.",
    "home.scheduleZoom": "Schedule Zoom",
    "home.whatsapp": "WhatsApp",

    // About Us
    "about.title": "About Us",
    "about.intro1": "My mission is to help families increase emotional regulation while fostering a clearer, more profound awareness of themselves and their life experiences. The ultimate goal is to support meaningful connection and conscious behavioral transformation.",
    "about.intro2": "My approach integrates a multicultural perspective, global worldview and a clinically informed practice. By integrating the warmth and collective values of my Colombian roots with a rigorous clinical training in the United States and a profound respect for the cultural nuances of Middle Eastern life, I offer a reflective space where every family feels truly seen. I am committed to provide family coaching support that honors your heritage, your unique circumstances and strengths, and prioritizes your voice in the healing process.",
    "about.intro3": "I have extensive clinical training and experience treating mood disorders, anxiety disorders, attachment difficulties, traumatic experiences, challenging behaviors in childhood and adolescence, neurodivergent parenting, marital discord, third culture adjustment and family stress. I have worked in a variety of settings including in person and teletherapy private practice, mental health organizations, public and private school settings and after school programs. Drawing on my clinical background, I am committed to integrating evidenced-based methods with a family's inherent inner strengths and wisdom. Whether short term or longer term, I am eager to engage with you in a collaborative way to help you overcome diverse family challenges and to enhance long term growth and connection within your family unit.",

    // Services/Offerings
    "services.title": "Offerings",
    "services.moreInfo": "More information →",
    "services.scheduleAppointment": "Schedule now",
    "services.individual.title": "Individual Coaching:",
    "services.individual.intro": "Individualized support to increase personal growth and self-discovery through a thought provoking, creative and skill building process",
    "services.individual.subtitle": "Common goals in individual coaching",
    "services.individual.goal1": "Relationship, assertiveness and communication training",
    "services.individual.goal2": "Enhancing decision making skills",
    "services.individual.goal3": "Coping with major life changes and transitions",
    "services.individual.goal4": "Increasing mindfulness and stress reduction skills",
    "services.individual.goal5": "Aligning personal values with family and professional life",
    "services.individual.goal6": "Developing effective self care plans",
    "services.couples.title": "Couples Coaching",
    "services.couples.intro": "Cultivate intentional connection and communication to master the dialogue of partnership within the context of a repairing experience.",
    "services.couples.subtitle": "Common goals in couples coaching",
    "services.couples.goal1": "Learning to listen actively and express needs clearly",
    "services.couples.goal2": "Deepening emotional vulnerability and physical intimacy",
    "services.couples.goal3": "Navigating parenting, financing and caregiving responsibilities",
    "services.couples.goal4": "Rediscover shared values and create a love map for the future",
    "services.couples.goal5": "Establishing healthy limits and mutual respect",
    "services.couples.goal6": "Create emotional safety where both partners feel seen, valued and loved",
    "services.family.title": "Family Coaching",
    "services.family.intro": "Empowering parents and children with evidence based tools to overcome emotional and developmental changes and optimize collective functioning.",
    "services.family.subtitle": "Common goals in family coaching",
    "services.family.goal1": "Navigating academic and social pressures",
    "services.family.goal2": "Developing growth mindset and healthy habits for emotional well-being",
    "services.family.goal3": "Build family rituals and manage daily routines",
    "services.family.goal4": "Build trust, empathy and safety among family members",
    "services.family.goal5": "Adapting to life changes like separation, moving and recovery",
    "services.family.goal6": "Addressing challenging behaviors such as defiance, bullying and isolation",
    "services.groups.title": "Groups Coaching",
    "services.groups.intro": "Small-group coaching sessions that leverage the power of a shared interest to build an effective action plan for personal and family support.",
    "services.groups.subtitle": "Common goals in groups coaching",
    "services.groups.goal1": "Neurodivergent Parenting (ADHD, ASD)",
    "services.groups.goal2": "Women Empowering",
    "services.groups.goal3": "Co-parenting and Bi-racial parenting",
    "services.groups.goal4": "Executive Functioning Training",
    "services.groups.goal5": "Pregnancy and Postpartum",
    "services.groups.goal6": "Mindfulness Training",

    // Packages
    "packages.title": "Packages",
    "packages.starter.title": "Starter",
    "packages.starter.price": "Three 60- minute session 2800 AED",
    "packages.starter.description": "A gateway for those beginning their coaching journey. This package includes a coaching assessment to identify specific short term and long term goals.",
    "packages.shortterm.title": "Short term",
    "packages.shortterm.description": "For shorter-term goals and immediate transformation. This package provides a targeted action plan focusing on rapid skill development and specific recommendation to evoke immediate growth.",
    "packages.shortterm.price": "Six 60- minute session 4800 AED",
    "packages.ongoing.title": "Ongoing",
    "packages.ongoing.description": "A deeper long term commitment for growth. This package offers a comprehensive long term road map centered in future oriented skill development and ongoing expert recommendations.",
    "packages.ongoing.price": "Ten 60-minute sessions for 7200 AED",
    "packages.supportgroups.title": "Support Groups",
    "packages.supportgroups.description": "For individuals to connect with others who are living similar experiences. These groups combine professional expertise with the power of shared experience to master new strategies and redefine existing ones.",
    "packages.supportgroups.price": "Six 75-minute group sessions for 750 AED",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Find answers to common questions about our coaching services",
    "faq.stillQuestions": "Still have questions? We're here to help.",
    "faq.q1": "What is family coaching?",
    "faq.a1": "Family coaching involves a partnership between an experienced coach and participating family members aimed at improving relationships, communication and overall emotional, behavioral and executive functioning. Family coaching involves a collaborative, person-centered and strengths-based approach to establish and achieve goals, to offer support and tools for challenging situations, and to provide a safe space to feel seen and understood.",
    "faq.q2": "What does a family coaching session look like?",
    "faq.a2": "A typical coaching session lasts 60 minutes. We recommend starting with weekly sessions, though the frequency can be adjusted based on your needs and goals. We work together to create a personalized plan that fits your schedule.",
    "faq.q3": "How is coaching different from psychotherapy?",
    "faq.a3": "Coaching is future-oriented and goal-driven while psychotherapy is more focused on the past and current mental health issues. Coaching emphasizes action, accountability and personal development while psychotherapy uses clinical techniques and interventions to address mental health symptoms. Coaching focuses on emotional support and practical tools while psychotherapy looks into providing a diagnosis and treating mental health conditions utilizing a clinical model.",
    "faq.q4": "Is coaching confidential?",
    "faq.a4": "Yes, absolutely. All coaching sessions are completely confidential. We maintain strict privacy standards to ensure you feel safe and comfortable sharing openly during our work together. Without written consent, the coach can not share any information to anyone outside the coaching relationship.",
    "faq.q5": "How do I get started?",
    "faq.a5": "Getting started is easy! Simply click the 'Schedule Now' or 'WhatsApp' button to book your initial free consultation. We'll discuss your needs, answer any questions, and discuss the intake documentation and coaching package that is right for you. After our consultation call, if you decide that coaching is for you, you can schedule your first coaching session where we get to  to identify shortern and long term goals. ",

    // Contact
    "contact.location": "Conveniently located at Masdar City, we provide a private and welcoming setting for individuals, couples and families who want to improve their overall wellbeing and regain a greater sense of control and confidence in their personal lives.",
    "contact.addressLabel": "Address:",
    "contact.addressValue": "MBZUAI, Building 1A, Podium Level, Unit G-12 (Simply Thai) Masdar City, Abu Dhabi",
    "contact.phoneLabel": "Phone:",
    "contact.phoneValue": "(971) 0505206141",
    "contact.emailLabel": "Email:",
    "contact.emailValue": "connectedbeings@gmail.com",
    "contact.zoomMeeting": "Schedule Zoom",

    // Products
    "products.underConstruction": "Under Construction",
    "products.comingSoon": "We're working hard to bring you something amazing. Our products page will be available soon!",
    "products.checkBack": "Please check back later for updates.",

    // Footer
    "footer.companyName": "Connected Beings Coaching Services",
    "footer.coachName": "Camila Barreto, Family Coach",
    "footer.license": "Lifestyle Development Consultancy #MC 13480 (UAE)",
    "footer.address": "Address: MBZUAI, Building 1A, Podium Level, Unit G-12",
    "footer.city": "Masdar City, Abu Dhabi",
    "footer.phone": "Phone: (+971) 0505206141",
    "footer.email": "Email: connectedbeings@gmail.com",
    "footer.links": "Links",
    "footer.socialMedia": "Social Media",
    "footer.copyright": "© 2024 Connected Beings. All rights reserved.",
  },
  es: {
    // Nav
    "nav.home": "Inicio",
    "nav.aboutUs": "Nosotros",
    "nav.offerings": "Servicios",
    "nav.packages": "Paquetes",
    "nav.products": "Productos",
    "nav.qa": "Preguntas",
    "nav.contact": "Contáctanos",
    "nav.services": "Servicios",

    // Home
    "home.tagline": "Un espacio para la conexión y el crecimiento.",
    "home.intro1": "En Connected Beings Coaching Services, ofrecemos entrenamiento práctico de habilidades y establecimiento colaborativo de metas diseñados para mejorar el funcionamiento emocional, conductual y ejecutivo. Nuestro experimentado y calificado coach familiar trabaja contigo para construir un plan de acción paso a paso destinado a fortalecer los vínculos relacionales, mejorar la regulación emocional, cultivar prácticas de crianza efectivas y navegar juntos las transiciones de vida.",
    "home.intro2": "Convenientemente ubicados en Masdar City, proporcionamos un entorno privado y acogedor para individuos, parejas y familias que desean mejorar su bienestar general y recuperar un mayor sentido de control y confianza en sus vidas personales.",
    "home.scheduleZoom": "Agendar Zoom",
    "home.whatsapp": "WhatsApp",

    // About Us
    "about.title": "Sobre Nosotros",
    "about.intro1": "Mi misión es ayudar a las familias a aumentar la regulación emocional mientras fomento una conciencia más clara y profunda de sí mismos y sus experiencias de vida. El objetivo final es apoyar la conexión significativa y la transformación conductual consciente.",
    "about.intro2": "Mi enfoque integra una perspectiva multicultural, una visión global del mundo y una práctica clínicamente informada. Al integrar la calidez y los valores colectivos de mis raíces colombianas con un riguroso entrenamiento clínico en Estados Unidos y un profundo respeto por los matices culturales de la vida del Medio Oriente, ofrezco un espacio reflexivo donde cada familia se siente verdaderamente vista. Estoy comprometida a proporcionar apoyo de coaching familiar que honre tu herencia, tus circunstancias y fortalezas únicas, y priorice tu voz en el proceso de sanación.",
    "about.intro3": "Tengo una amplia formación clínica y experiencia tratando trastornos del estado de ánimo, trastornos de ansiedad, dificultades de apego, experiencias traumáticas, comportamientos desafiantes en la infancia y adolescencia, crianza neurodivergente, discordia marital, ajuste de tercera cultura y estrés familiar. He trabajado en una variedad de entornos incluyendo práctica privada presencial y teleterapia, organizaciones de salud mental, escuelas públicas y privadas y programas extracurriculares. Basándome en mi formación clínica, estoy comprometida a integrar métodos basados en evidencia con las fortalezas y sabiduría inherentes de la familia. Ya sea a corto o largo plazo, estoy ansiosa por comprometerme contigo de manera colaborativa para ayudarte a superar diversos desafíos familiares y mejorar el crecimiento y la conexión a largo plazo dentro de tu unidad familiar.",

    // Services/Offerings
    "services.title": "Servicios",
    "services.moreInfo": "Más información →",
    "services.scheduleAppointment": "Agendar ahora",
    "services.individual.title": "Coaching Individual:",
    "services.individual.intro": "Apoyo individualizado para aumentar el crecimiento personal y el autodescubrimiento a través de un proceso estimulante, creativo y de desarrollo de habilidades",
    "services.individual.subtitle": "Objetivos comunes en coaching individual",
    "services.individual.goal1": "Entrenamiento en relaciones, asertividad y comunicación",
    "services.individual.goal2": "Mejorar las habilidades de toma de decisiones",
    "services.individual.goal3": "Afrontar cambios y transiciones importantes de vida",
    "services.individual.goal4": "Aumentar las habilidades de mindfulness y reducción de estrés",
    "services.individual.goal5": "Alinear valores personales con la vida familiar y profesional",
    "services.individual.goal6": "Desarrollar planes efectivos de autocuidado",
    "services.couples.title": "Coaching de Parejas",
    "services.couples.intro": "Cultivar conexión y comunicación intencional para dominar el diálogo de la asociación dentro del contexto de una experiencia reparadora.",
    "services.couples.subtitle": "Objetivos comunes en coaching de parejas",
    "services.couples.goal1": "Aprender a escuchar activamente y expresar necesidades claramente",
    "services.couples.goal2": "Profundizar la vulnerabilidad emocional e intimidad física",
    "services.couples.goal3": "Navegar responsabilidades de crianza, finanzas y cuidado",
    "services.couples.goal4": "Redescubrir valores compartidos y crear un mapa de amor para el futuro",
    "services.couples.goal5": "Establecer límites saludables y respeto mutuo",
    "services.couples.goal6": "Crear seguridad emocional donde ambos se sientan vistos, valorados y amados",
    "services.family.title": "Coaching Familiar",
    "services.family.intro": "Empoderando a padres e hijos con herramientas basadas en evidencia para superar cambios emocionales y de desarrollo y optimizar el funcionamiento colectivo.",
    "services.family.subtitle": "Objetivos comunes en coaching familiar",
    "services.family.goal1": "Navegar presiones académicas y sociales durante la adolescencia",
    "services.family.goal2": "Desarrollar mentalidad de crecimiento y hábitos saludables para el bienestar emocional",
    "services.family.goal3": "Construir rituales familiares y gestionar rutinas diarias",
    "services.family.goal4": "Construir confianza, empatía y seguridad entre miembros de la familia",
    "services.family.goal5": "Adaptarse a cambios de vida como separación, mudanza y recuperación",
    "services.family.goal6": "Abordar comportamientos desafiantes como desafío, acoso y aislamiento",
    "services.groups.title": "Coaching Grupal",
    "services.groups.intro": "Sesiones de coaching en grupos pequeños que aprovechan el poder de un interés compartido para construir un plan de acción efectivo para el apoyo personal y familiar.",
    "services.groups.subtitle": "Objetivos comunes en coaching grupal",
    "services.groups.goal1": "Crianza Neurodivergente (TDAH, TEA)",
    "services.groups.goal2": "Empoderamiento Femenino",
    "services.groups.goal3": "Co-crianza y Crianza Birracial",
    "services.groups.goal4": "Entrenamiento de Funciones Ejecutivas",
    "services.groups.goal5": "Embarazo y Postparto",
    "services.groups.goal6": "Entrenamiento en Mindfulness",

    // Packages
    "packages.title": "Paquetes",
    "packages.starter.title": "Inicial",
    "packages.starter.description": "Puerta de entrada para quienes comienzan su viaje de coaching. Este paquete incluye una evaluación de coaching familiar para identificar metas específicas a corto y largo plazo.",
    "packages.starter.price": "Tres sesiones de 60 minutos por 2800 AED",
    "packages.shortterm.title": "Corto plazo",
    "packages.shortterm.description": "Para metas a corto plazo y transformación inmediata. Este paquete proporciona un plan de acción dirigido enfocado en el desarrollo rápido de habilidades y recomendaciones específicas para provocar un crecimiento inmediato.",
    "packages.shortterm.price": "Seis sesiones de 60 minutos por 4800 AED",
    "packages.ongoing.title": "Continuo",
    "packages.ongoing.description": "Un compromiso más profundo a largo plazo para el crecimiento. Este paquete ofrece una hoja de ruta integral a largo plazo centrada en el desarrollo de habilidades orientadas al futuro y recomendaciones expertas continuas.",
    "packages.ongoing.price": "Diez sesiones de 60 minutos por 7200 AED",
    "packages.supportgroups.title": "Grupos de Apoyo",
    "packages.supportgroups.description": "Para individuos que desean conectar con otros que están viviendo experiencias similares. Estos grupos combinan la experiencia profesional con el poder de la experiencia compartida para dominar nuevas estrategias y redefinir las existentes.",
    "packages.supportgroups.price": "Seis sesiones grupales de 75 minutos por 750 AED",

    // FAQ
    "faq.title": "Preguntas Frecuentes",
    "faq.subtitle": "Encuentra respuestas a preguntas comunes sobre nuestros servicios de coaching",
    "faq.stillQuestions": "¿Aún tienes preguntas? Estamos aquí para ayudarte.",
    "faq.q1": "¿Qué es el coaching familiar?",
    "faq.a1": "El coaching familiar implica una asociación entre un coach experimentado y los miembros de la familia participantes con el objetivo de mejorar las relaciones, la comunicación y el funcionamiento emocional, conductual y ejecutivo en general. El coaching familiar involucra un enfoque colaborativo, centrado en la persona y basado en fortalezas para establecer y alcanzar metas, ofrecer apoyo y herramientas para situaciones difíciles, y proporcionar un espacio seguro para sentirse visto y comprendido.",
    "faq.q2": "¿Cómo es una sesión de coaching familiar?",
    "faq.a2": "Una sesión típica de coaching dura 60 minutos. Recomendamos comenzar con sesiones semanales, aunque la frecuencia puede ajustarse según tus necesidades y metas. Trabajamos juntos para crear un plan personalizado que se adapte a tu horario.",
    "faq.q3": "¿En qué se diferencia el coaching de la psicoterapia?",
    "faq.a3": "El coaching está orientado al futuro y enfocado en metas, mientras que la psicoterapia se centra más en el pasado y los problemas actuales de salud mental. El coaching enfatiza la acción, la responsabilidad y el desarrollo personal, mientras que la psicoterapia utiliza técnicas e intervenciones clínicas para abordar síntomas de salud mental. El coaching se enfoca en el apoyo emocional y herramientas prácticas, mientras que la psicoterapia se dedica a proporcionar un diagnóstico y tratar condiciones de salud mental utilizando un modelo clínico.",
    "faq.q4": "¿El coaching es confidencial?",
    "faq.a4": "Sí, absolutamente. Todas las sesiones de coaching son completamente confidenciales. Mantenemos estrictos estándares de privacidad para asegurar que te sientas seguro y cómodo compartiendo abiertamente durante nuestro trabajo juntos. Sin consentimiento escrito, el coach no puede compartir ninguna información con nadie fuera de la relación de coaching.",
    "faq.q5": "¿Cómo puedo comenzar?",
    "faq.a5": "¡Comenzar es fácil! Simplemente haz clic en el botón 'Agendar Ahora' o 'WhatsApp' para reservar tu consulta inicial gratuita. Discutiremos tus necesidades, responderemos cualquier pregunta, y hablaremos sobre la documentación de admisión y el paquete de coaching adecuado para ti. Después de nuestra llamada de consulta, si decides que el coaching es para ti, puedes programar tu primera sesión de coaching donde asignaremos metas a corto y largo plazo.",

    // Contact
    "contact.location": "Convenientemente ubicados en Masdar City, proporcionamos un entorno privado y acogedor para individuos, parejas y familias que desean mejorar su bienestar general y recuperar un mayor sentido de control y confianza en sus vidas personales.",
    "contact.addressLabel": "Dirección:",
    "contact.addressValue": "MBZUAI, Edificio 1A, Nivel Podio, Unidad G-12 (Simply Thai) Masdar City, Abu Dhabi",
    "contact.phoneLabel": "Teléfono:",
    "contact.phoneValue": "(971) 0505206141",
    "contact.emailLabel": "Correo:",
    "contact.emailValue": "connectedbeings@gmail.com",
    "contact.zoomMeeting": "Agendar Zoom",

    // Products
    "products.underConstruction": "En Construcción",
    "products.comingSoon": "Estamos trabajando para traerte algo increíble. ¡Nuestra página de productos estará disponible pronto!",
    "products.checkBack": "Por favor, vuelve más tarde para ver las actualizaciones.",

    // Footer
    "footer.companyName": "Connected Beings Coaching Services",
    "footer.coachName": "Camila Barreto, Coach Familiar",
    "footer.license": "Consultoría de Desarrollo de Estilo de Vida #MC 13480 (EAU)",
    "footer.address": "Dirección: MBZUAI, Edificio 1A, Nivel Podio, Unidad G-12",
    "footer.city": "Masdar City, Abu Dhabi",
    "footer.phone": "Teléfono: (+971) 0505206141",
    "footer.email": "Correo: connectedbeings@gmail.com",
    "footer.links": "Enlaces",
    "footer.socialMedia": "Redes Sociales",
    "footer.copyright": "© 2024 Connected Beings. Todos los derechos reservados.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "en" || saved === "es")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
