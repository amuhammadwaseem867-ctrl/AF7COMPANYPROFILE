import { Montserrat, Poppins } from "next/font/google";
import Providers from "../components/Providers";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600"],
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
      className={`${montserrat.variable} ${poppins.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
