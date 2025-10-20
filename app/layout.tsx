import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from 'next-themes'

import './globals.css'
import { Header } from '../components/layout/header'
import { Footer } from '../components/layout/footer'
import { openSans, redHatText } from '@/lib/fonts'
import { getBaseUrl } from '@/lib/utils'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "Emmett's Portfolio",
    template: "%s | Emmett's Portfolio",
  },
  description: "Emmett's Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.variable} ${redHatText.variable} bg-[#EFF3F5] tracking-tight antialiased dark:bg-[#0D0D0D]`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto flex w-full max-w-screen-sm flex-1 flex-col justify-between px-4">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
