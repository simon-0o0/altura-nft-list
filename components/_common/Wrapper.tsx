import { ConnectionProvider } from "@solana/wallet-adapter-react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface WrapperProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <ConnectionProvider endpoint={process.env.NEXT_PUBLIC_SOLANA_RPC_ENDPOINT!}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ConnectionProvider>
  );
};

export default Wrapper;
