import React from "react";
import { MintItemType } from "utils/types";
import NftItem from "./NftItem";

interface MintItemsTableProps {
  mintItemList: MintItemType[];
}

const MintItemsTable = ({ mintItemList }: MintItemsTableProps) => {
  return (
    <div className="w-full grid gap-[1rem] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {mintItemList &&
        mintItemList.length > 0 &&
        mintItemList.map((item) => <NftItem key={item.mint} item={item} />)}
    </div>
  );
};

export default MintItemsTable;
