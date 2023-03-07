import type { NextPageWithLayout } from "@/components/_common/Layout";
import Layout from "@/components/_common/Layout";
import { useGetCollections } from "@/hooks/useGetCollections";
import { useConnection } from "@solana/wallet-adapter-react";
import React, { ReactElement, useEffect } from "react";

const Home: NextPageWithLayout = () => {
  const { data, isLoading, isFetched } = useGetCollections();

  useEffect(() => {
    if (isFetched) {
      console.log(data);
    }
  }, [data, isFetched]);

  return <div className="text-neutral-50 min-h-[calc(100vh-5rem)]"></div>;
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
