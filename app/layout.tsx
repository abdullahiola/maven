import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ruiji 瑞吉 | The Seal That Touched Hearts 🦭",
  description:
    "Ruiji 瑞吉 is the adorable seal whose heartwarming rescue story inspired a movement. Join the community, grab the token on Solana, and follow Ruiji's journey.",
  keywords: ["Ruiji", "瑞吉", "seal", "Solana", "meme coin", "pump.fun", "crypto"],
  openGraph: {
    title: "Ruiji 瑞吉 | The Seal That Touched Hearts 🦭",
    description: "A small, gentle sea creature whose story touched many hearts. Now on Solana.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
