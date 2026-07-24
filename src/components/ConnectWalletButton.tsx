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
      const connector =
        connectors.find((item) => item.type === "injected") ?? connectors[0];

      if (!connector) {
        setError("No injected wallet was found. Install MetaMask and try again.");
        return;
      }

      await connectAsync({ connector });
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
