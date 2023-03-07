import axios from "axios";
import { useQuery } from "react-query";
import { HOWRARE_COLLECTIONS_API } from "utils/constants";
import { CollectionType } from "utils/types";

export const useGetCollections = () => {
  return useQuery(["GET_COLLECTIONS"], async () => {
    const res = (await axios.get(HOWRARE_COLLECTIONS_API)).data;
    let collections: CollectionType[] = [];
    if (res.result.api_response === "Success") {
      collections = res.result.data;
    }
    return collections;
  });
};
