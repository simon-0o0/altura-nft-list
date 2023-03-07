import React from "react";
import { rangeFormatter } from "utils/helper";

interface HeroProps {
  collectionsCount: number;
  itemsCount: number;
  ownersCount: number;
}

const Details = ({
  value,
  title,
}: {
  value: number | string;
  title: string;
}) => {
  return (
    <div className="rounded-[0.5rem] bg-neutral300 px-[2rem] py-[1.25rem] flex justify-center flex-col items-center md:py-[2rem]">
      <p className="text-[1rem] font-medium md:text-[1.5rem]">{value}</p>
      <p className="uppercase text-[0.75rem] md:text-[1rem]">{title}</p>
    </div>
  );
};

const Hero = ({ collectionsCount, itemsCount, ownersCount }: HeroProps) => {
  return (
    <div className="flex h-[14rem] flex-col bg-neutral500 px-[5%] items-center gap-[0.5rem] justify-center md:px-[10%] xl:h-[12rem] xl:justify-between xl:flex-row">
      <div>
        <h1 className="text-[1.5rem] md:text-[2.625rem] font-semibold">
          Find out Solana NFTs
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-[1rem] w-full xl:w-[36rem]">
        <Details value={collectionsCount} title={"collections"} />
        <Details value={rangeFormatter(itemsCount, 1)} title={"items"} />
        <Details value={rangeFormatter(ownersCount, 1)} title={"owners"} />
      </div>
    </div>
  );
};

export default Hero;
