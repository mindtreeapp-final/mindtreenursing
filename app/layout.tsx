import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/nav/page.js";
import WhatsAppButton from "./components/whatsapp/page.js"
import Footer from "./components/footer/page.js"
import OffersButton from "./components/offers/page.js";
import OnamPopup from "./components/onam/OnamPopup.js";
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
       <GoogleTagManager gtmId="GTM-532PQV5D" />
<body className="min-h-full flex flex-col">
          <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-532PQV5D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

      <ScrollAnimations />
      <OnamPopup />
      <Nav />
  
        {children}       
          <WhatsAppButton phoneNumber="919778286707" message="Hello, I'd like to know more about your services." />
           <OffersButton />
    
        <Footer/>
       
        </body>
      
    </html>
  );
}
