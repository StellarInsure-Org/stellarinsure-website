import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import FooterSection from "@/components/footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StellarInsure — Decentralized Parametric Insurance on Stellar",
  description: "Create insurance policies as smart contracts. Get instant payouts triggered by verifiable data. Built on Stellar Soroban with multi-sig governance and community-funded risk pools.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}>
      <head><script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches;if(t==='light'){document.documentElement.classList.remove('dark')}else if(t==='dark'||!t||d){document.documentElement.classList.add('dark')}}catch(e){}})()`}} /></head>
      <body className="min-h-full flex flex-col bg-background">
        <Navbar />
        <main className="flex-1">{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
