"use client";

import { useState } from "react";
import { shortenAddress } from "@/lib/format";

type AdminAddressProps = {
  address?: string;
  scanUrl?: string;
  label: string;
  showLabel?: boolean;
};

export function AdminAddress({
  address,
  scanUrl,
  label,
  showLabel = false,
}: AdminAddressProps) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">(
    "idle",
  );

  async function copyAddress() {
    if (!address) {
      return;
    }

    try {
      await navigator.clipboard.writeText(address);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }

    window.setTimeout(() => setCopyState("idle"), 1_800);
  }

  return (
    <div className="admin-address">
      {showLabel && <span className="admin-address-label">{label}</span>}
      <div className="admin-address-line">
        <code title={address}>{address ? shortenAddress(address) : "Loading…"}</code>
        <button
          type="button"
          className="admin-icon-button"
          onClick={copyAddress}
          disabled={!address}
          aria-label={`Copy ${label.toLowerCase()}`}
          title={`Copy ${label.toLowerCase()}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <span className="admin-visually-hidden" aria-live="polite">
            {copyState === "copied"
              ? "Address copied"
              : copyState === "error"
                ? "Copy failed"
                : "Copy address"}
          </span>
        </button>
        {scanUrl && address && (
          <a
            className="admin-icon-button"
            href={scanUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${label.toLowerCase()} on BscScan`}
            title="View on BscScan"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </a>
        )}
      </div>
      {copyState !== "idle" && (
        <span
          className={`admin-copy-feedback ${copyState === "error" ? "is-error" : ""}`}
        >
          {copyState === "copied" ? "Copied" : "Copy failed"}
        </span>
      )}
    </div>
  );
}
