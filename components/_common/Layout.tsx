import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { ToastContainer } from "react-toastify";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Altura NFT List</title>
        <link rel="icon" type="image/svg" sizes="32x32" href="/favicon.ico" />
        <meta name="description" content="Altura NFT list" />
      </Head>
      <Header />
      <main className="overflow-hidden w-full bg-neutral400 pt-[5rem] px-[10%]">
        {children}
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Layout;

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
