import "./globals.css";
import { DM_Mono, Mochiy_Pop_One, Outfit } from "next/font/google";

const font_mono = DM_Mono({
  weight: ["400", "500", "300"],
  subsets: ["latin"],
  variable: "--font-mono",
  fallback: ["monospace"],
  adjustFontFallback: true,
});
const font_sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const font_jp = Mochiy_Pop_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jp",
});

export const metadata = {
  title: "William Hideki portifolio",
  description: "William Hideki personal portifolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${font_sans.variable} ${font_mono.variable} ${font_jp.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
