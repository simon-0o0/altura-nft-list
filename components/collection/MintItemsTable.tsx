import React, { useState } from "react";
import { MintItemType } from "utils/types";
import NftItem from "./NftItem";
import NftItemDetailsDialog from "../_common/NftItemDetailsDialog";

interface MintItemsTableProps {
  mintItemList: MintItemType[];
}

const MintItemsTable = ({ mintItemList }: MintItemsTableProps) => {
  const [isNftDetailsDialogShow, setIsNftDetailsDialogShow] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [mint, setMint] = useState("");

  const handleClickItem = (mintItem: MintItemType) => {
    setMint(mintItem.mint);
    setDialogTitle(mintItem.name);
    setIsNftDetailsDialogShow(true);
  };

  return (
    <>
      <div className="w-full grid gap-[1rem] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {mintItemList &&
          mintItemList.length > 0 &&
          mintItemList.map((item) => (
            <NftItem
              key={item.mint}
              item={item}
              onItemClick={handleClickItem}
            />
          ))}
      </div>
      <NftItemDetailsDialog
        isShow={isNftDetailsDialogShow}
        setIsShow={setIsNftDetailsDialogShow}
        title={dialogTitle}
        mint={mint}
      />
    </>
  );
};

export default MintItemsTable;
