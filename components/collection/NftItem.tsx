import Image from "next/image";
import React from "react";
import { MintItemType } from "utils/types";

interface NftItemProps {
  item: MintItemType;
  onItemClick: (item: MintItemType) => void;
}

const NftItem = ({ item, onItemClick }: NftItemProps) => {
  return (
    <div
      className="flex flex-col items-center py-[0.5rem] rounded-[0.5rem] gap-[0.5rem] w-full bg-neutral300 hover:bg-neutral100 hover:bg-opacity-20 hover:cursor-pointer shadow"
      onClick={() => {
        onItemClick(item);
      }}
    >
      <div className="mx-[0.5rem] flex justify-center">
        <Image
          src={item.image}
          width={240}
          height={240}
          className="rounded-[0.25rem]"
          alt={`${item.name} NFT image`}
        />
      </div>
      <div className="flex w-full justify-between px-[0.5rem] font-medium items-center">
        <p>{`Rank: ${item.rank}`}</p>
        <p>{`#${item.id}`}</p>
      </div>
    </div>
  );
};

export default NftItem;
