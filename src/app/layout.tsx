import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import "./style.css";

const title = "Zar Air (ZARAI) | Official Website";
const description =
  "Zar Air (ZARAI) is a fixed-supply BEP-20 token on BNB Smart Chain supporting the development of the Zar Air project.";

export const metadata: Metadata = {
  metadataBase: new URL("https://zarair.com"),
  title,
  description,
  alternates: { canonical: "/" },
  icons: {
    icon: { url: "/assets/zarair-logo-64.png", type: "image/png", sizes: "64x64" },
    apple: { url: "/assets/zarair-logo-64.png", type: "image/png", sizes: "64x64" },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    siteName: "Zar Air",
    url: "https://zarair.com",
    type: "website",
    images: [{
      url: "/og.png",
      width: 1200,
      height: 630,
      alt: "Zar Air logo",
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
