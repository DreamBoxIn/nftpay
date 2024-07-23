import { createThirdwebClient } from "thirdweb";

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "",
  chains: [
    {
      chainId: 1, // Mainnet
      rpcUrl: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
      name: "Ethereum",
    },
    {
      chainId: 11155111, // Sepolia
      rpcUrl: "https://rpc.sepolia.org",
      name: "Sepolia Testnet",
    },
  ],
});

export { client };
