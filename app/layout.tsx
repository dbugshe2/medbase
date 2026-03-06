import type { Metadata, Viewport } from "next";
import { Work_Sans } from "next/font/google";
import { RouteProvider } from "@/providers/route-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Medbase Africa",
    default: "Medbase | Medbase Africa",
  },
  description:
    "Medbase Africa - Medbase is a Nigerian non-profit focused on healthcare advocacy, particularly in Sexual & Reproductive Health Rights (SRHR).",
  openGraph: {
    type: "website",
    url: "https://medbase.africa/",
    title: "Medbase | Medbase Africa",
    description:
      "Medbase Africa - Medbase is a Nigerian non-profit focused on healthcare advocacy, particularly in Sexual & Reproductive Health Rights (SRHR).",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-primary antialiased">
        <RouteProvider>
          <ThemeProvider>
            <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
              {children}
            </div>
          </ThemeProvider>
        </RouteProvider>
      </body>
    </html>
  );
}
