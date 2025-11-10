import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

// --- Metadata ---
export const metadata: Metadata = {
  title: {
    template: '%s - LeVAN, SPRADER, PATTON & PLYMIRE, PLLC',
    default: 'LeVAN, SPRADER, PATTON & PLYMIRE, PLLC',
  },
  description:
    'The law firm of LeVAN, SPRADER, PATTON & PLYMIRE provides quality legal services in Nashville (Davidson County) and Middle Tennessee. Serving the region since 1998.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'LeVAN, SPRADER, PATTON & PLYMIRE, PLLC',
    description:
      'Providing quality legal services in Nashville (Davidson County) and Middle Tennessee since 1998.',
    url: 'https://your-site.pages.dev', // replace with actual Cloudflare Pages URL
    siteName: 'LSPP Law',
    images: [
      {
        url: '/favicon.ico', // you can later swap with og.jpg or logo
        width: 64,
        height: 64,
        alt: 'LSPP Law Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

// --- Fonts ---
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

// --- Layout ---
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable
      )}
    >
      <head>
        {/* Force favicon refresh */}
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
      </head>
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
