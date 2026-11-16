import { Fredoka, Instrument_Serif, Nunito } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

// Italic serif used only for single accent words in headlines
const serif = Instrument_Serif({
  variable: "--font-serif-accent",
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
  display: "swap",
});

export const metadata = {
  title: "The Laban Wala — Egyptian Laban Desserts",
  description:
    "Laban-based desserts rooted in Egyptian tradition. Pick your favourites from the menu, or send us your order on WhatsApp.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable} ${serif.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-white text-navy">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-royal focus:px-5 focus:py-3 focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <Providers>
          {children}
          <FloatingWhatsApp />
        </Providers>
      </body>
    </html>
  );
}
