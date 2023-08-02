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
  title: "William Hideki",
  description:
    "My dev portfolio, take a look and get in touch! This  portfolio was built on Next.js 13, Framer motion and Tailwindcss",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon/favicon-32x32.png",
      },
    ],
  },
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
