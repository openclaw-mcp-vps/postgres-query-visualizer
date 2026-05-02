import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Postgres Query Visualizer – Visual EXPLAIN Plans",
  description: "Interactive visual representation of Postgres EXPLAIN plans with performance bottleneck highlighting for database developers and DBAs."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a87c4eb2-fe9c-46bb-9516-36c82ca3cf51"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
