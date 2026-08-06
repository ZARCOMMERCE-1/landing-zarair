"use client";

import { useState } from "react";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useSwitchChain,
} from "wagmi";
import { CHAIN_ID } from "@/lib/contracts";
import { getWalletErrorMessage } from "@/lib/wallet-errors";

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

function isMobileBrowser() {
  if (typeof navigator === "undefined") {
    return false;
  }

  return (
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
    (/Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1)
  );
}

function hasInjectedWallet() {
  return typeof window !== "undefined" && "ethereum" in window;
}

export function ConnectWalletButton() {
  const { address, chainId, isConnected } = useAccount();
  const { connectors, connectAsync, isPending: isConnecting } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChainAsync, isPending: isSwitching } = useSwitchChain();
  const [error, setError] = useState("");

  const isWrongNetwork = isConnected && chainId !== CHAIN_ID;

  async function connectWallet() {
    setError("");

    try {
      const injectedConnector = connectors.find(
        (item) => item.type === "injected",
      );
      const metaMaskConnector = connectors.find(
        (item) => item.type === "metaMask",
      );
      const shouldUseMetaMaskConnect =
        isMobileBrowser() && !hasInjectedWallet();
      const connector = shouldUseMetaMaskConnect
        ? (metaMaskConnector ?? injectedConnector)
        : (injectedConnector ?? metaMaskConnector);

      if (!connector) {
        setError(
          "MetaMask connection is unavailable. Install MetaMask and try again.",
        );
        return;
      }

      await connectAsync({ connector, chainId: CHAIN_ID });
    } catch (connectError) {
      setError(getWalletErrorMessage(connectError, "connect"));
    }
  }

  async function switchNetwork() {
    setError("");

    try {
      // The injected connector uses wallet_switchEthereumChain and adds the
      // configured BNB Chain details when the wallet does not know chain 56.
      await switchChainAsync({ chainId: CHAIN_ID });
    } catch (switchError) {
      setError(getWalletErrorMessage(switchError, "switch"));
    }
  }

  if (isConnected && address) {
    return (
      <div className="wallet-control">
        <div className="wallet-actions">
          {isWrongNetwork && (
            <button
              className="network-switch-btn"
              type="button"
              onClick={switchNetwork}
              disabled={isSwitching}
            >
              {isSwitching ? "Switching…" : "Switch to BNB Chain"}
            </button>
          )}
          <button
            className="wallet-btn wallet-address"
            type="button"
            onClick={() => disconnect()}
            title="Disconnect wallet"
          >
            <span
              className={`wallet-dot ${isWrongNetwork ? "is-wrong" : ""}`}
              aria-hidden="true"
            />
            {shortenAddress(address)}
          </button>
        </div>
        {error && (
          <span className="wallet-error" role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="wallet-control">
      <button
        className="wallet-btn"
        type="button"
        onClick={connectWallet}
        disabled={isConnecting}
      >
        {isConnecting ? "Connecting…" : "Connect Wallet"}
      </button>
      {error && (
        <span className="wallet-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
