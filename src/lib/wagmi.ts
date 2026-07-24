import { createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";
import { bnbMainnet } from "@/lib/chains";

export const wagmiConfig = createConfig({
  chains: [bnbMainnet],
  connectors: [injected({ shimDisconnect: true })],
  transports: {
    [bnbMainnet.id]: http(bnbMainnet.rpcUrls.default.http[0]),
  },
  ssr: true,
});
