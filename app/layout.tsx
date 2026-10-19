import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Montserrat } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
})

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['600', '700', '800'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "Amanat Logistic - Грузоперевозки по Казахстану и СНГ",
  description:
    'Грузоперевозки собственным автопарком 1–200 тонн в Алматы, по Казахстану и СНГ. Работаем 24/7.',
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
  themeColor: '#062230',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${montserrat.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
