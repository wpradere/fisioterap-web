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
  title: "ConnectectedBeingd App",
  description: "Coaching Service",
  icons: {
    icon: "/Favicon - compatibilidad general.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dreamAvenue.variable} ${lato.variable}`}>
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
