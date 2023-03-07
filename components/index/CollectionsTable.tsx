import React from "react";
import Image from "next/image";
import { CollectionType } from "utils/types";
import { ITEMS_PER_PAGE } from "utils/constants";

interface CollectionsTableProps {
  itemList: CollectionType[];
  page: number;
}

const CollectionsTable = ({ itemList, page }: CollectionsTableProps) => {
  return (
    <div className="w-full">
      {itemList.length > 0 ? (
        itemList.map((item, i) => {
          return (
            <div
              key={item.name}
              className="w-full flex h-[4.5rem] items-center py-[0.25rem] border-b-[0.0625rem] border-neutral100 border-opacity-50 hover:bg-neutral-300 hover:bg-opacity-5"
            >
              <div className="w-[10%] pl-[1rem]">
                <p>{page * ITEMS_PER_PAGE + i + 1}</p>
              </div>
              <div className="w-[45%] flex gap-[0.5rem] items-center hover:cursor-pointer md:gap-[1.5rem]">
                <Image
                  src={`https://howrare.is${item.logo}`}
                  width={48}
                  height={48}
                  alt={`${item.name} logo`}
                  className="rounded-[0.5rem]"
                />
                <p>{item.name}</p>
              </div>
              <div className="w-[15%]">
                <p>{`${item.floor} SOL`}</p>
              </div>
              <div className="w-[15%]">
                <p>{item.items}</p>
              </div>
              <div className="w-[15%]">
                <p>{item.holders}</p>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex items-center justify-center h-[20rem]">
          <p>No Collections</p>
        </div>
      )}
    </div>
  );
};

export default CollectionsTable;
