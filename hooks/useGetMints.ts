import axios from "axios";
import { useQuery } from "react-query";
import { HOWRARE_MINTS_API } from "utils/constants";
import { MintsType } from "utils/types";

export const useGetMints = (collectionName: string) => {
  return useQuery(["GET_MINTS"], async () => {
    if (!collectionName) return undefined;

    let mints: MintsType | undefined = undefined;
    const res = (await axios.post(HOWRARE_MINTS_API, { collectionName })).data;

    if (res.error !== "error") {
      mints = res.data;
    } else {
    }
    return mints;
  });
};
