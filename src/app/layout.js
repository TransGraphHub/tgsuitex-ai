import { Geist, Geist_Mono } from "next/font/google";
import { Nunito } from "next/font/google";
import "./globals.css";
import ScrollDownButtons from "@/utils/ScrollDownButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "TG SuiteX AI",
  description: "Powering Commodity Decisions with Unified Intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* scroll down icon */}
        <ScrollDownButtons />
      </body>
    </html>
  );
}
