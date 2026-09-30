import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { inter } from '@/app/ui/fonts';
import Link from 'next/link';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blok@Bib",
  description: "Reserveren voor een studeer- en werkplaats in de bibliotheek",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav>
          <Link href="/" >Home</Link>
          <Link href="/calendar">Calendar</Link>
          <Link href="/account">Account</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
