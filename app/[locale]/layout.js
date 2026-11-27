import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/layout/NavBar";
import { getDictionary } from "@/lib/dictionaries";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

// Headings serif. The "opsz" axis lets large headings use the font's display cut automatically.
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
});

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.browser.title,
    description: dictionary.browser.description,
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col">
        <NavBar locale={locale} dictionary={dictionary} />
        {children}
        <Footer locale={locale} dictionary={dictionary} />
      </body>
    </html>
  );
}
