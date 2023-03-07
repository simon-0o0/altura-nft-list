import { NextPageWithLayout } from "@/components/_common/Layout";
import Wrapper from "@/components/_common/Wrapper";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <Wrapper>{getLayout(<Component {...pageProps} />)}</Wrapper>;
};

export default MyApp;
