import type { Metadata } from "next";
import Script from "next/script";
import "./style.css";

export const metadata: Metadata = {
  title: "ZARAIR Token | Fly Smarter. Own the Sky.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
      <Script src="/script.js" strategy="afterInteractive" />
    </html>
  );
}
