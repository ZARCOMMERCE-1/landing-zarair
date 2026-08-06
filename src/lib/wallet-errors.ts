type WalletAction = "connect" | "switch" | "approve" | "purchase" | "admin";

const actionLabels: Record<WalletAction, string> = {
  connect: "Wallet connection",
  switch: "Network switch",
  approve: "USDT approval",
  purchase: "Purchase",
  admin: "Admin transaction",
};

export function getWalletErrorMessage(
  error: unknown,
  action: WalletAction,
): string {
  const rawMessage =
    error instanceof Error ? `${error.name} ${error.message}` : String(error);
  const message = rawMessage.toLowerCase();

  if (
    message.includes("user rejected") ||
    message.includes("user denied") ||
    message.includes("rejected the request") ||
    message.includes("denied transaction signature")
  ) {
    return `${actionLabels[action]} was rejected in the wallet.`;
  }

  if (
    action === "connect" &&
    (message.includes("not installed") ||
      message.includes("no provider") ||
      message.includes("failed to open"))
  ) {
    return "MetaMask could not be opened. Install or update the MetaMask app and try again.";
  }

  if (
    message.includes("insufficient funds") ||
    message.includes("insufficient balance for gas") ||
    message.includes("exceeds the balance")
  ) {
    return "Insufficient BNB to pay the BNB Chain network fee.";
  }

  if (
    message.includes("chain mismatch") ||
    message.includes("wrong chain") ||
    message.includes("unsupported chain")
  ) {
    return "Switch your wallet to BNB Chain Mainnet and try again.";
  }

  if (message.includes("insufficient allowance")) {
    return "The USDT allowance is too low. Approve USDT before purchasing.";
  }

  if (message.includes("insufficient") && message.includes("usdt")) {
    return "Your wallet does not have enough USDT for this purchase.";
  }

  const shortMessage =
    typeof error === "object" &&
    error !== null &&
    "shortMessage" in error &&
    typeof error.shortMessage === "string"
      ? error.shortMessage
      : undefined;

  return shortMessage ?? `${actionLabels[action]} failed. Please try again.`;
}
