import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Search for flashcards or create your own | Flashcards HQ',
  description: 'Discover Flashcards HQ: A Community-Driven Learning Platform with Extensive, User-Created Flashcards. Join, Share, Create your own and Learn Today!',
  openGraph: {
    title: 'Flashcards HQ: Community-Driven Flashcard Learning',
    description: 'Discover Flashcards HQ: A Community-Driven Learning Platform with Extensive, User-Created Flashcards. Join, Share, Create your own and Learn Today!',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="halloween">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
