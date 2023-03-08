import React, { Dispatch, SetStateAction } from "react";
import CustomPagination from "../_common/CustomPagination";
import { ITEMS_PER_PAGE } from "utils/constants";

interface CollectionFilterProps {
  page: number;
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
  isBottom?: boolean;
}

const CollectionFilter = ({
  page,
  totalPages,
  setPage,
  isBottom = false,
}: CollectionFilterProps) => {
  return (
    <div className="w-full mt-[1rem] py-[1rem]">
      <div className="flex justify-between items-center flex-col md:flex-row gap-[1rem]">
        <p className="uppercase font-medium">{`${
          page === 0
            ? `Top ${ITEMS_PER_PAGE} collections`
            : `Collections ${page * ITEMS_PER_PAGE} - ${
                (page + 1) * ITEMS_PER_PAGE
              }`
        }`}</p>
        <CustomPagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />
      </div>
      {!isBottom && (
        <div className="w-full flex h-[4.5rem] items-center mt-[1.5rem] border-b-[0.0625rem] border-neutral100 border-opacity-50 uppercase">
          <div className="w-[10%] px-[1rem]">
            <p>#</p>
          </div>
          <div className="w-[45%]">
            <p>collection</p>
          </div>
          <div className="w-[15%]">
            <p>floor price</p>
          </div>
          <div className="w-[15%]">
            <p>items</p>
          </div>
          <div className="w-[15%]">
            <p>holders</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionFilter;
