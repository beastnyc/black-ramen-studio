import type { Metadata } from "next";
import { Inter, Libre_Caslon_Text } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const caslon = Libre_Caslon_Text({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Black Ramen Studio — Multipotentiality in Motion",
  description: "A creative studio exploring the full spectrum of possibility. From design to code, strategy to storytelling — we simmer in complexity.",
  metadataBase: new URL("https://blackramenstudio.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${caslon.variable} antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
