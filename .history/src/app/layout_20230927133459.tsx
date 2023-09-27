import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import '../../css/style.css'
import '../../css/mobile.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopNav from './components/topNav'
import Footer from './components/footer'
import BottomNav from './components/bottomNav'
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "&lt;Korey ❤️ Coding/&gt;",
  description: 'Generated by create next app',
  icons: '/puzzle-piece.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title></title>
        <link rel="shortcut icon" href="/puzzle-piece.svg" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <TopNav />
        {children}
        <Footer />
        <BottomNav />
      </body>
    </html>
  )
}
