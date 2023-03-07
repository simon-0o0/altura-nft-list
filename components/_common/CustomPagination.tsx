import React, { Dispatch, SetStateAction } from "react";
import { Pagination } from "react-headless-pagination";

interface CustomPaginationProps {
  page: number;
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const CustomPagination = ({
  page,
  totalPages,
  setPage,
}: CustomPaginationProps) => {
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className="flex justify-center items-center">
      <Pagination
        currentPage={page}
        setCurrentPage={handlePageChange}
        totalPages={totalPages}
        edgePageCount={3}
        middlePagesSiblingCount={1}
        className="list-none"
        truncableText="..."
        truncableClassName="w-8 px-0.5 text-center"
      >
        <div className="flex">
          <div className="flex flex-grow items-center justify-center gap-[1rem]">
            <Pagination.PageButton
              activeClassName="text-neutral50 bg-neutral300"
              inactiveClassName="text-neutral100"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full"
            />
          </div>
        </div>
      </Pagination>
    </div>
  );
};

export default CustomPagination;
