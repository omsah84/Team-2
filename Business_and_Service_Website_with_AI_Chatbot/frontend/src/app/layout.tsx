import Header from "@/components/HomeHeader";
import Footer from "@/components/HomeFooter";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import ChatWidget from "@/components/ChatWidget";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Service - Website",
  description: "Welcome to service website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <ChatWidget/>
        <Footer />
      </body>
    </html>
  );
}
