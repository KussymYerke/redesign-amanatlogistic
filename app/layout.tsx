import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const manrope = localFont({
  src: [
    {
      path: "./fonts/manrope/Manrope-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/manrope/Manrope-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/manrope/Manrope-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/manrope/Manrope-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

const montserrat = localFont({
  src: [
    {
      path: "./fonts/montserrat/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/montserrat/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/montserrat/Montserrat-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amanat Logistic - Грузоперевозки по Казахстану и СНГ",
  description:
    "Грузоперевозки собственным автопарком 1–200 тонн в Алматы, по Казахстану и СНГ. Работаем 24/7.",
  keywords: [
    "грузоперевозки",
    "логистика",
    "доставка",
    "инертные материалы",
    "Алматы",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#062230",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${montserrat.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
