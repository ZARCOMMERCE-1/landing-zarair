import { createConfig, http } from "wagmi";
import { injected, metaMask } from "wagmi/connectors";
import { bnbMainnet } from "@/lib/chains";

export const wagmiConfig = createConfig({
  chains: [bnbMainnet],
  connectors: [
    injected({ shimDisconnect: true }),
    metaMask({
      dapp: {
        name: "Zar Air",
        url: "https://zarair.com",
        iconUrl: "https://zarair.com/assets/zarair-logo-64.png",
      },
      mobile: {
        // Regular mobile Chrome has no injected provider. MetaMask Connect
        // uses this native deep link to open the installed MetaMask app.
        useDeeplink: true,
      },
    }),
  ],
  transports: {
    [bnbMainnet.id]: http(bnbMainnet.rpcUrls.default.http[0]),
  },
  ssr: true,
});
