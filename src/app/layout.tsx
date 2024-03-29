import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import MyProfilePic from './components/myProfilePic'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'Created by Hafsa Tufail',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800`}>
        <Navbar/>
        <MyProfilePic/>
        {children}</body>
    </html>
  )
}
