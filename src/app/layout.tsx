import type { Metadata } from "next";
import { Mulish } from "next/font/google"; // Import Mulish font
import "./globals.css";

import Header from "../components/sheared/header/Header";
import Footer from "../components/sheared/footer/Footer";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const mulish = Mulish({ subsets: ["latin"] }); // Initialize Mulish font

export const metadata: Metadata = {
  title: "TurnAbroad",
  description: "Top Destinations to Study Abroad for Bangladeshi Students",
  metadataBase: new URL("https://turnabroad.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header />
        {children}
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
