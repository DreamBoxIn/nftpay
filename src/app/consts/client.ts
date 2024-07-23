import { createThirdwebClient } from "thirdweb";
import { Chain } from "thirdweb/types";

// Definimos la configuración de las cadenas fuera del cliente
const chains: Chain[] = [
  {
    chainId: 1,
    rpcUrl: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
    name: "Ethereum",
  },
  {
    chainId: 11155111,
    rpcUrl: "https://rpc.sepolia.org",
    name: "Sepolia Testnet",
  },
];

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "",
  // Puedes agregar más configuraciones aquí si es necesario
});

export { client, chains };
