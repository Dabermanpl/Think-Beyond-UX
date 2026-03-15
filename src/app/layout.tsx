import type { Metadata } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import ScrollToTop from "@/components/ScrollToTop";
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
  title: "Think Beyond | Nowoczesna rekrutacja i obsługa studenta",
  description: "Zbuduj cyfrowy uniwersytet, który przyciąga kandydatów, eliminuje papierowe procesy i skraca czas odpowiedzi.",
  keywords: ["Salesforce Higher Education", "transformacja cyfrowa uczelni", "rekrutacja studentów", "Service Cloud", "Experience Cloud", "Education Cloud"],
  authors: [{ name: "Think Beyond UX" }],
  openGraph: {
    title: "Education Cloud | Nowoczesna rekrutacja i obsługa studenta",
    description: "Zbuduj cyfrowy uniwersytet, który przyciąga kandydatów, eliminuje papierowe procesy i skraca czas odpowiedzi.",
    url: "https://dabermanpl.github.io/Think-Beyond-UX/",
    siteName: "Think Beyond",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Education Cloud | Nowoczesna rekrutacja i obsługa studenta",
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
      <head>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vw5nwha7xw");
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
