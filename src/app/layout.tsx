import type { Metadata } from "next";
import localFont from "next/font/local";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Nav from "@/components/Nav";
import Particles from "@/components/ui/particles";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {/* <div className="-z-10">
          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            color={'#fff'}
            refresh
          />
        </div> */}
        <ThemeProvider>
          <NextTopLoader
            showSpinner={false}
            color="#4646d7"
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
