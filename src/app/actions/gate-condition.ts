import { getContract } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { client } from "../consts/client";
import { balanceOf as balanceOfERC721 } from "thirdweb/extensions/erc721";
import { Address } from "thirdweb/types"; // Asegúrate de importar el tipo Address correctamente

export async function hasAccess(address: Address): Promise<boolean> {
  return await example_hasSomeErc721Tokens(address);
}

async function example_hasSomeErc721Tokens(address: Address) {
  const requiredQuantity = 1n;

  const erc721Contract = getContract({
    address: "0x3a9Dba1fC8602d924fb1b623EC391fc68840f731",
    chain: sepolia,
    client,
  });

  const ownedBalance = await balanceOfERC721({
    contract: erc721Contract,
    owner: address,
  });

  console.log({ ownedBalance });

  return ownedBalance >= requiredQuantity;
}
