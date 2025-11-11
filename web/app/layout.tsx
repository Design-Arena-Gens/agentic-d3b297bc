import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Phycomania ? Algues & Nutrition Durable",
    template: "%s | Phycomania",
  },
  description:
    "Phycomania d?veloppe des solutions innovantes ? base de microalgues pour la nutrition, la sant? et l'environnement.",
  metadataBase: new URL("https://agentic-d3b297bc.vercel.app"),
  openGraph: {
    title: "Phycomania ? Algues & Nutrition Durable",
    description:
      "Solutions ? base de microalgues pour une nutrition plus saine et durable.",
    url: "https://agentic-d3b297bc.vercel.app",
    siteName: "Phycomania",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phycomania ? Algues & Nutrition Durable",
    description:
      "Solutions ? base de microalgues pour une nutrition plus saine et durable.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <div className="min-h-dvh flex flex-col">
          <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-black/5 dark:border-white/10">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/logo.svg" alt="Phycomania" width={28} height={28} />
                <span className="text-base font-semibold tracking-tight">Phycomania</span>
              </Link>
              <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                <Link href="/produits" className="hover:opacity-80">Produits</Link>
                <Link href="/a-propos" className="hover:opacity-80">? propos</Link>
                <Link href="/contact" className="hover:opacity-80">Contact</Link>
              </div>
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-black/5 dark:border-white/10">
            <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 md:grid-cols-3">
              <div>
                <div className="flex items-center gap-3">
                  <Image src="/logo.svg" alt="Phycomania" width={24} height={24} />
                  <span className="text-sm font-semibold">Phycomania</span>
                </div>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                  Algues, innovation et nutrition durable.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-3">Navigation</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:opacity-80">Accueil</Link></li>
                  <li><Link href="/produits" className="hover:opacity-80">Produits</Link></li>
                  <li><Link href="/a-propos" className="hover:opacity-80">? propos</Link></li>
                  <li><Link href="/contact" className="hover:opacity-80">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-3">Contact</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">contact@phycomania.com</p>
              </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-zinc-500 dark:text-zinc-400">
              ? {new Date().getFullYear()} Phycomania. Tous droits r?serv?s.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
