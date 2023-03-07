import type { NextPageWithLayout } from "@/components/_common/Layout";
import Layout from "@/components/_common/Layout";
import Hero from "@/components/index/Hero";
import { useGetCollections } from "@/hooks/useGetCollections";
import Image from "next/image";
import React, { ReactElement, useEffect, useState } from "react";

const Home: NextPageWithLayout = () => {
  const [collectionsCount, setCollectionsCount] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);
  const [ownersCount, setOwnersCount] = useState(0);

  const { data, isFetched } = useGetCollections();

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
    }
  }, [data, isFetched]);

  return (
    <div className="text-neutral-50 min-h-[calc(100vh-5rem)]">
      <Hero
        collectionsCount={collectionsCount}
        itemsCount={itemsCount}
        ownersCount={ownersCount}
      />
      <div className="w-full px-[5%] md:px-[10%]">
        <div className="w-full flex mt-[2rem]">
          <div className="w-[10%]">
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
        <div className="w-full">
          {isFetched &&
            data &&
            data.length > 0 &&
            data.map((item, i) => {
              return (
                <div
                  key={item.name}
                  className="w-full flex h-[4.5rem] items-center py-[0.25rem] border-b-[0.0625rem] border-neutral100 border-opacity-50"
                >
                  <div className="w-[10%]">
                    <p>{i}</p>
                  </div>
                  <div className="w-[45%] flex gap-[0.5rem] items-center">
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
            })}
        </div>
      </div>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
