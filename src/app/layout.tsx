import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { BottomNavigation } from '@/components/bottom-navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TLM Digital - Träume. Lernen. Machen.',
  description: 'Professional IT services for your digital dreams',
  manifest: '/manifest.json',
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="tlm-theme"
        >
          <div className="min-h-screen bg-background text-foreground">
            {children}
            <BottomNavigation />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}