import React from "react";
import { BounceLoader } from "react-spinners";

interface PageLoaderInterface {
  loading: boolean;
}

const PageLoader = ({ loading }: PageLoaderInterface) => {
  if (!loading) return null;
  return (
    <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-vert-dark-gray bg-opacity-40 transition">
      <BounceLoader size={60} color="#ffffff" />
    </div>
  );
};

export default PageLoader;
