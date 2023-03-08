import GoHomeButton from "@/components/_common/GoHomeButton";
import Layout, { NextPageWithLayout } from "@/components/_common/Layout";
import PageLoader from "@/components/_common/PageLoader";
import Intro from "@/components/collection/Intro";
import MintItemsTable from "@/components/collection/MintItemsTable";
import MintsFilter from "@/components/collection/MintsFilter";
import { useGetMints } from "@/hooks/useGetMints";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { MINTS_PER_PAGE } from "utils/constants";
import { MintItemType } from "utils/types";

const Collection: NextPageWithLayout = () => {
  const router = useRouter();
  const [mintItemList, setMintItemList] = useState<MintItemType[]>();
  const [itemCount, setItemCount] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const { collection } = router.query;
  const { data, isLoading, isFetched } = useGetMints(collection as string);

  useEffect(() => {
    if (isFetched && data && data.items && data.items.length > 0) {
      setItemCount(data.items.length);
      setTotalPages(Math.ceil(data.items.length / MINTS_PER_PAGE));
      setMintItemList(
        data.items.splice(page * MINTS_PER_PAGE, (page + 1) * MINTS_PER_PAGE)
      );
    }
  }, [data, isFetched]);

  useEffect(() => {
    if (isFetched && data && data.items && data.items.length > 0) {
      setMintItemList(
        data.items.splice(page * MINTS_PER_PAGE, (page + 1) * MINTS_PER_PAGE)
      );
    }
  }, [page]);

  return (
    <div className="text-neutral-50 min-h-[calc(100vh-5rem)]">
      {!isLoading && isFetched && data && (
        <>
          <Intro itemsCount={itemCount} mints={data} />
          <MintsFilter page={page} totalPages={totalPages} setPage={setPage} />
          <div className="w-full px-[5%] md:px-[10%]">
            {isFetched && mintItemList && mintItemList.length > 0 && (
              <MintItemsTable mintItemList={mintItemList} />
            )}
          </div>
          <MintsFilter page={page} totalPages={totalPages} setPage={setPage} />
        </>
      )}
      {!isLoading && isFetched && !data && (
        <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
          <div className="flex flex-col items-center">
            <p className="font-bold pb-[1rem]">
              Something went wrong, Please try again later.
            </p>
            <GoHomeButton />
          </div>
        </div>
      )}
      {isLoading && <PageLoader loading={true} />}
    </div>
  );
};

Collection.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Collection;
