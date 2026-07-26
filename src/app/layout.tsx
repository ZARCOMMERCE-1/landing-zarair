import type { Metadata } from "next";
import { headers } from "next/headers";
import { Providers } from "@/app/providers";
import "./style.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "ZARAIR Token | Fly Smarter. Own the Sky.",
    description:
      "Connect an injected wallet and purchase ZARAI with USDT through the verified sale contract on BNB Chain Mainnet.",
    openGraph: {
      title: "ZARAIR | ZARAI Token Sale",
      description:
        "Connect your wallet and buy ZARAI with USDT on BNB Chain Mainnet.",
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1740,
          height: 907,
          alt: "ZARAIR ZARAI Token Sale on BNB Chain Mainnet",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "ZARAIR | ZARAI Token Sale",
      description:
        "Connect your wallet and buy ZARAI with USDT on BNB Chain Mainnet.",
      images: ["/og.png"],
    },
  };
}

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
