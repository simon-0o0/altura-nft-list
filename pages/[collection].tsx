import Layout, { NextPageWithLayout } from "@/components/_common/Layout";
import Intro from "@/components/collection/Intro";
import MintsTable from "@/components/collection/MintsTable";
import { useGetMints } from "@/hooks/useGetMints";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { ITEMS_PER_PAGE, MINTS_PER_PAGE } from "utils/constants";

const Collection: NextPageWithLayout = () => {
  const router = useRouter();
  const { collection } = router.query;
  const { data, isLoading, isFetched } = useGetMints(collection as string);

  const [mints, setMints] = useState<string[]>();
  const [itemCount, setItemCount] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (isFetched && data && data.mints && data.mints.length > 0) {
      setItemCount(data.mints.length);
      setTotalPages(Math.ceil(data.mints.length / MINTS_PER_PAGE));
      setMints(
        data.mints.splice(page * MINTS_PER_PAGE, (page + 1) * MINTS_PER_PAGE)
      );
    }
  }, [data, isFetched, page, router]);

  return (
    <div className="text-neutral-50 min-h-[calc(100vh-5rem)]">
      {!isLoading && isFetched && data && (
        <>
          <Intro itemsCount={itemCount} mints={data} />
          <div className="w-full grid grid-cols-6 px-[5%] md:px-[10%]">
            {mints &&
              mints.length > 0 &&
              mints.map((mintAddress) => (
                <div key={mintAddress}>
                  <Image
                    src="https://media.howrare.is/nft_images/degenapes/a139ad54efd06526d62b374b63864ccb.jpg"
                    width={120}
                    height={120}
                    alt="alt"
                  />
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

Collection.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Collection;
