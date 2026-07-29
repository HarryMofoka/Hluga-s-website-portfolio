import type { Metadata } from "next";
import "@/styles.css";
import { SiteNav } from "@/components/SiteNav";
import { SplashScreen } from "@/components/SplashScreen";

export const metadata: Metadata = {
  title: "Lehlohonolo Mofokeng — Frontend Developer in Johannesburg",
  description:
    "HLUGA. — the portfolio of Lehlohonolo Mofokeng, a frontend developer in Johannesburg building fast, accessible and animated web experiences.",
  authors: [{ name: "Lehlohonolo Mofokeng" }],
  openGraph: {
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="hluga">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="hluga">
        <SplashScreen />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
