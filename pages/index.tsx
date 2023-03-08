import type { NextPageWithLayout } from "@/components/_common/Layout";
import Layout from "@/components/_common/Layout";
import CollectionFilter from "@/components/index/CollectionFilter";
import CollectionsTable from "@/components/index/CollectionsTable";
import Hero from "@/components/index/Hero";
import { useGetCollections } from "@/hooks/useGetCollections";
import { BeatLoader } from "react-spinners";

import React, { ReactElement, useEffect, useState } from "react";
import { ITEMS_PER_PAGE } from "utils/constants";
import { CollectionType } from "utils/types";
import LoadingSpinner from "@/components/_common/LoadingSpinner";

const Home: NextPageWithLayout = () => {
  const [collectionsCount, setCollectionsCount] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);
  const [ownersCount, setOwnersCount] = useState(0);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [itemList, setItemList] = useState<CollectionType[]>([]);

  const { data, isLoading, isFetched } = useGetCollections();

  // set initial data
  useEffect(() => {
    if (isFetched && data && data.length > 0) {
      // collection count
      setCollectionsCount(data.length);

      // items, owners count
      let ic = 0,
        oc = 0;
      data.forEach((col) => {
        ic += col.items;
        oc += col.holders;
      });
      setItemsCount(ic);
      setOwnersCount(oc);

      // total page
      setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE));

      // set table items
      setItemList(
        data.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE)
      );
    }
  }, [data, isFetched, page]);

  return (
    <div className="text-neutral-50 min-h-[calc(100vh-5rem)]">
      <Hero
        collectionsCount={collectionsCount}
        itemsCount={itemsCount}
        ownersCount={ownersCount}
      />
      <div className="w-full px-[5%] md:px-[10%]">
        <CollectionFilter
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />
        {!isLoading && isFetched && data && data.length > 0 && (
          <>
            <CollectionsTable itemList={itemList} page={page} />
            <CollectionFilter
              page={page}
              totalPages={totalPages}
              setPage={setPage}
              isBottom
            />
          </>
        )}
        {isLoading && <LoadingSpinner />}
      </div>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
