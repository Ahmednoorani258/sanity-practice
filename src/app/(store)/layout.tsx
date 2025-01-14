import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "Ecommerce-App-Practice",
  description: "Created By Muhammad Ahmed Noorani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
        <Header />
        {children}
        </main>
        <SanityLive/>
      </body>
    </html>
  );
}
