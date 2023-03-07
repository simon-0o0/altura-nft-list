import type { NextPageWithLayout } from "@/components/_common/Layout";
import Layout from "@/components/_common/Layout";
import React, { ReactElement } from "react";

const Home: NextPageWithLayout = () => {
  return (
    <div className="text-[2rem] text-neutral-50 min-h-[calc(100vh-5rem)]"></div>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
