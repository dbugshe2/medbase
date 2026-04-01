import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, IBM_Plex_Mono, Lora } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { data } from '@/data/data';
import { ThemeProvider } from '@/providers/theme-provider';
import { Header } from '@/sections/header';
import { Footer } from '@/sections/footer';

const fontSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
});
const fontMono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400'],
});
const fontSerif = Lora({
  variable: '--font-serif',
  subsets: ['latin'],
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
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
