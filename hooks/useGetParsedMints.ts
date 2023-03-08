import {
  Metadata,
  PROGRAM_ID as TOKEN_METADATA_PROGRAM_ID,
} from "@metaplex-foundation/mpl-token-metadata";
import { useConnection } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import axios from "axios";
import { useQuery } from "react-query";
import { NftExternalMetaDataType } from "utils/types";

export const useGetParsedMints = (
  collectionName: string | undefined,
  mints: string[] | undefined,
  page: number
) => {
  const { connection } = useConnection();

  return useQuery(
    ["GET_PARSED_MINTS", collectionName, page],
    async () => {
      let metadataList: {
        metadata: Metadata;
        externalMetadata: NftExternalMetaDataType;
      }[] = [];

      if (mints && mints.length > 0) {
        metadataList = await Promise.all(
          mints.map(async (mintAddress) => {
            // find metadata account
            const metadataPubkey = PublicKey.findProgramAddressSync(
              [
                Buffer.from("metadata", "utf8"),
                TOKEN_METADATA_PROGRAM_ID.toBuffer(),
                new PublicKey(mintAddress).toBuffer(),
              ],
              TOKEN_METADATA_PROGRAM_ID
            )[0];
            const accountInfo = await connection.getAccountInfo(metadataPubkey);
            const metadata = Metadata.deserialize(
              accountInfo?.data as Buffer,
              0
            )[0];
            const externalMetadata: NftExternalMetaDataType = (
              await axios.get(metadata.data.uri)
            ).data;
            return { metadata, externalMetadata };
          })
        );
      }
      return metadataList;
    },
    { enabled: page >= 0 && !!collectionName }
  );
};
