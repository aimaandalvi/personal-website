import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Aimaan Dalvi | Portfolio",
    template: "%s | Aimaan Dalvi",
  },
  description:
    "Personal portfolio for Aimaan Dalvi, a Management Engineering student at the University of Waterloo building at the intersection of data, operations, product, and business technology.",
  metadataBase: new URL("https://aimaandalvi.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans text-zinc-950 antialiased dark:text-zinc-100">
        <Navbar />
        <main className="mx-auto min-h-[calc(100vh-12rem)] max-w-4xl px-5 py-12 sm:px-6 sm:py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
