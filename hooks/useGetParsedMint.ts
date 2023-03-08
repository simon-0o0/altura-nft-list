import {
  Metadata,
  PROGRAM_ID as TOKEN_METADATA_PROGRAM_ID,
} from "@metaplex-foundation/mpl-token-metadata";
import { useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import axios from "axios";
import { useQuery } from "react-query";
import { NftExternalMetaDataType } from "utils/types";

export const useGetParsedMint = (mint: string) => {
  const { connection } = useConnection();

  return useQuery(["GET_PARSED_MINTS", mint], async () => {
    try {
      // find metadata account
      const metadataPubkey = PublicKey.findProgramAddressSync(
        [
          Buffer.from("metadata", "utf8"),
          TOKEN_METADATA_PROGRAM_ID.toBuffer(),
          new PublicKey(mint).toBuffer(),
        ],
        TOKEN_METADATA_PROGRAM_ID
      )[0];
      const accountInfo = await connection.getAccountInfo(metadataPubkey);
      const metadata = Metadata.deserialize(accountInfo?.data as Buffer, 0)[0];
      const externalMetadata: NftExternalMetaDataType = (
        await axios.get(metadata.data.uri)
      ).data;
      return { metadata, externalMetadata };
    } catch (e) {
      return null;
    }
  });
};
