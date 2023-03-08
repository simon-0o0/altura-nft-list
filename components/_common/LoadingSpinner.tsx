import React from "react";
import { BeatLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex w-full items-center justify-center h-[10rem]">
      <BeatLoader size={6} color="#ffffff" />
    </div>
  );
};

export default LoadingSpinner;
