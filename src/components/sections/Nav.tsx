"use client";

import { ConnectWalletButton } from "@/components/ConnectWalletButton";
import { Logo } from "@/components/Logo";
import { useNavScroll } from "@/hooks/useNavScroll";

export function Nav() {
  const navRef = useNavScroll();

  return (
    <nav ref={navRef}>
      <div className="logo">
        <Logo />
      </div>
      <ConnectWalletButton />
    </nav>
  );
}
