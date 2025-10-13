import "./globals.css" ; 


import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Header } from "./header"
import { Footer } from "./footer"
import { Inter } from "next/font/google"
import { themeEffect } from "./theme-effect"

const inter = Inter({subsets:["latin"]}) ; 



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Md Rizabul",
  description: "My portfolio Website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})()`,
          }}
        />
      </head>

      <body className="m-auto max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl dark:text-gray-100">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
