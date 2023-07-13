import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BUET Hackathon",
  description: "BUET Hackathon | Team যান্ত্রিক",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="cmyk">
      <body className="bg-pm-gray-1">
        <main className="flex flex-col items-center w-[100vw] h-[100vh]">{children}</main>
      </body>
    </html>
  )
}
