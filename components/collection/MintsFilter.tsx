import React, { Dispatch, SetStateAction } from "react";
import { MINTS_PER_PAGE } from "utils/constants";
import CustomPagination from "../_common/CustomPagination";

interface MintsFilterProps {
  page: number;
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
  isBottom?: boolean;
}

const MintsFilter = ({
  page,
  totalPages,
  setPage,
  isBottom = false,
}: MintsFilterProps) => {
  return (
    <div className="w-full mt-[1rem] py-[1rem] px-[5%] md:px-[10%]">
      <div className="flex justify-between items-center flex-col md:flex-row gap-[1rem]">
        <p className="uppercase font-medium">{`${`Mints ${
          page * MINTS_PER_PAGE
        } - ${(page + 1) * MINTS_PER_PAGE}`}`}</p>
        <CustomPagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default MintsFilter;
