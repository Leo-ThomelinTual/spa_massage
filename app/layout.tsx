import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Website name",
  description: "Site vitrine de message",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="antialiased">
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
