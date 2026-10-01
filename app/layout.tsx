import type { Metadata } from "next";
import { cookies } from "next/headers";
import { dinpro } from "@/app/ui/fonts";
import ThemeToggle from "@/app/ui/theme-toggle"; 
import Link from 'next/link';
import "./globals.css";

export const metadata: Metadata = {
  title: "Blok@Bib",
  description: "Reserveren voor een studeer- en werkplaats in de bibliotheek",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const theme = (await cookies()).get("theme")?.value;
  const isDark = theme === "dark";
  
  return (
    <html
      lang="en"
      className={`${dinpro.className} h-full antialiased${isDark ? " dark" : ""}`}
    >
      <body className="min-h-full flex flex-col items-center justify-start bg-zinc-100 font-sans dark:bg-black">
        <nav className="flex items-center justify-center">
          <Link href="/" className="px-8 py-4 py-4">
            <div className="text-black dark:text-gray-300">
              Home
            </div> 
          </Link>
          <Link href="/calendar" className="px-8 py-4">
            <div className="text-black dark:text-gray-300">
              Calendar
            </div> 
          </Link>
          <Link href="/account" className="px-8 py-4">
            <div className="text-black dark:text-gray-300">
              Account
            </div> 
          </Link>
          <ThemeToggle initialDark={isDark} />
        </nav>
        {children}
      </body>
    </html>
  );
}
