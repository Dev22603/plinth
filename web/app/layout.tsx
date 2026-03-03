import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// Display + body font: Outfit (bold, characterful, modern)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-cabinet",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plinth — Software Built to Scale",
  description: "We build things carefully. Full-stack systems, automated pipelines, and apps engineered by a team that cares about structure.",
  openGraph: {
    title: "Plinth — Software Built to Scale",
    description: "We build things carefully. Full-stack systems, automated pipelines, and apps engineered by a team that cares about structure.",
    url: "https://plinth.agency",
    siteName: "Plinth",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
