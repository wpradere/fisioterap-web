import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import localFont from 'next/font/local'
import { LanguageProvider } from "@/context/LanguageContext";


const dreamAvenue = localFont({
  src: './fonts/dream-avenue.ttf',
   weight: '200',
   style: 'normal',
   variable: '--font-dream'
})


const lato = Lato({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--font-lato'
})

export const metadata: Metadata = {
  title: "Connected Beings Coaching Services",
  description: "Our experienced and qualified family coach works with you to build a step-by-step action plan aimed at strengthening relational bonds, improving emotional regulation, and cultivating effective parenting practices. Located in Masdar City, Abu Dhabi.",
  keywords: "family coaching, coaching familiar, Abu Dhabi, Masdar City, emotional regulation, parenting, couples coaching",
  authors: [{ name: "Camila Barreto" }],
  openGraph: {
    title: "Connected Beings Coaching Services",
    description: "Family, Individual, Couples and Group Coaching in Masdar City, Abu Dhabi",
    type: "website",
    locale: "en_US",
    siteName: "Connected Beings Coaching Services",
  },
  icons: {
    icon: "/Favicon - compatibilidad general.svg",
  },
  verification: {
    google: "3avWyBq86T6MiIoG7bgY4B1JoSj6hy8spwpFXBd3Vt0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dreamAvenue.variable} ${lato.variable}`}>
      <head>
        <meta name="referrer" content="no-referrer" />
      </head>
      <body
        className={dreamAvenue.className}
      >
        <LanguageProvider>
          <Nav/>
          {children}
          <Footer/>
        </LanguageProvider>
      </body>
    </html>
  );
}
