import "./globals.css";

export const metadata = {
  title: "AF7 | Apparel Fastener",
  description:
    "AF7 / Apparel Fastener — Company Profile. Precision fastening solutions from Lahore, Pakistan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}