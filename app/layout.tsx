import type { Metadata } from 'next';
import {  Inter, JetBrains_Mono, Lora } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { data } from '@/data/data';
import { ThemeProvider } from '@/providers/theme-provider';
import { Header } from '@/sections/header';
import { Footer } from '@/sections/footer';
import { Toaster } from '@/components/ui/sonner';

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: data.name,
  description: data.description,
  openGraph: {
    type: 'website',
    url: data.url,
    title: data.name,
    description: data.description,
    images: [
      {
        url: 'https://veo.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: data.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} ${fontSerif.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
