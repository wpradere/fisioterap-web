import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import localFont from 'next/font/local'


const dreamAvenue = localFont({
  src: './fonts/dream-avenue.ttf',
   weight: '200',
   style: 'normal',
})






export const metadata: Metadata = {
  title: "ConnectectedBeingd App",
  description: "Coaching Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={dreamAvenue.className}
      >
       <Nav/> 
        {children}
        <Footer/>

      </body>
    </html>
  );
}
