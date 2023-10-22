import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalState } from '@/context/Context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Loja de Serviços',
  description: 'Aplicação web para registro e divulgação de serviços diversos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="icon.svg" type="image/svg" />
      </head>
      <body className={inter.className}>
        <GlobalState>          
            {children}          
        </GlobalState>
      </body>
    </html>
  )
}
