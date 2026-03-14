import type { Metadata } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edu Cloud Partner | Nowoczesna rekrutacja i obsługa studenta",
  description: "Zbuduj cyfrowy uniwersytet, który przyciąga kandydatów, eliminuje papierowe procesy i skraca czas odpowiedzi.",
  keywords: ["Salesforce Higher Education", "transformacja cyfrowa uczelni", "rekrutacja studentów", "Service Cloud", "Experience Cloud", "Edu Cloud Partner"],
  authors: [{ name: "Think Beyond UX" }],
  openGraph: {
    title: "Edu Cloud Partner | Nowoczesna rekrutacja i obsługa studenta",
    description: "Zbuduj cyfrowy uniwersytet, który przyciąga kandydatów, eliminuje papierowe procesy i skraca czas odpowiedzi.",
    url: "https://dabermanpl.github.io/Think-Beyond-UX/",
    siteName: "Edu Cloud Partner",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edu Cloud Partner | Nowoczesna rekrutacja i obsługa studenta",
    description: "Zbuduj cyfrowy uniwersytet, który przyciąga kandydatów, eliminuje papierowe procesy i skraca czas odpowiedzi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
