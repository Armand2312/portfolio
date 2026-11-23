import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/layout/NavBar";
import {getDictionary} from "@/lib/dictionaries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.browser.title,
    description: dictionary.browser.description,
  };
}

/* Supported Languages */
export const supportedLocales = ["en", "tr"];

export default async function RootLayout({ children, params }) {
  const {locale} = await params;

  /* if (!supportedLocales.includes(locale)) {
    redirect("/en");
  } */
  
  const dictionary = await getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <NavBar locale={locale} dictionary={dictionary} />
        {children}
      </body>
    </html>
  );
}
