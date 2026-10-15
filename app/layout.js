import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Providers from "../components/Providers";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata = {
  title: "AF7 — Zipper Manufacturing & Garment Accessories",
  description:
    "AF7 is a specialized zipper manufacturing brand in Lahore, Pakistan — metal, aluminium, nylon and Vislon zippers with selected garment accessories. Precision in Every Detail.",
};

export const viewport = {
  themeColor: "#0e1520",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${serif.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
