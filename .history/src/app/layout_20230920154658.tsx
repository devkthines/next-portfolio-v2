import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import '../../css/style.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TopHeader from './components/header'
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Korey's coding solutions",
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
        <link rel="shortcut icon" href="/puzzle-piece.svg" type="image/x-icon" />
      </head>
      <body className={inter.className}>
{/* <TopHeader/> */}
        {children}</body>
    </html>
  )
}
