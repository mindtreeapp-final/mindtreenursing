import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/nav/page.js";
import WhatsAppButton from "./components/whatsapp/page.js"
import Footer from "./components/footer/page.js"
import OffersButton from "./components/offers/page.js";
import ScrollAnimations from "./components/ScrollAnimations";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
<body className="min-h-full flex flex-col">
      <ScrollAnimations />
      <Nav />
  
        {children}       
          <WhatsAppButton phoneNumber="919778286707" message="Hello, I'd like to know more about your services." />
           <OffersButton />
    
        <Footer/>
       
        </body>
      
    </html>
  );
}
