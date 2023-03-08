import React from "react";
import { MintsType } from "utils/types";
import Image from "next/image";
import Socials from "../_common/Socials";
import { useRouter } from "next/router";
import { BsChevronCompactRight } from "react-icons/bs";

interface IntroProps {
  itemsCount: number;
  mints: MintsType;
}

const Intro = ({ itemsCount, mints }: IntroProps) => {
  const router = useRouter();

  return (
    <div className="flex bg-neutral500 px-[5%] flex-col gap-[0.5rem] text-neutral50 py-[1rem] md:py-[3rem] md:px-[10%]">
      <div className="flex items-center gap-[0.5rem] text-neutral100">
        <p
          className="hover:text-neutral50 hover:cursor-pointer"
          onClick={() => {
            router.back();
          }}
        >
          Home
        </p>
        <BsChevronCompactRight />
        <p>{mints.collection}</p>
      </div>
      <div className="flex items-center gap-[0.5rem] md:justify-between">
        <div className="flex flex-col gap-[1rem] sm:flex-row">
          <div className="flex gap-[1rem]">
            <div className="w-[6rem] h-[6rem]">
              <Image
                className="rounded-[0.5rem]"
                src={mints.logo}
                width={96}
                height={96}
                alt={`${mints.collection} collection logo`}
              />
            </div>
            <div className="flex flex-col py-[0.5rem] sm:hidden">
              <Socials
                homepage={mints.website}
                twitter={mints.twitter}
                discord={mints.discord}
              />
              <p className="block font-medium mt-[1rem]">{`Items: ${itemsCount}`}</p>
            </div>
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <div className="flex gap-[1rem]">
              <h1 className="text-[1.5rem] font-bold">{mints.collection}</h1>
              <div className="hidden sm:flex sm:items-center">
                <Socials
                  homepage={mints.website}
                  twitter={mints.twitter}
                  discord={mints.discord}
                />
              </div>
            </div>
            <p>{mints.description}</p>
            <p className="hidden font-medium sm:block lg:hidden">{`Items: ${itemsCount}`}</p>
          </div>
        </div>
        <div className="rounded-[0.5rem] bg-neutral300 px-[2rem] py-[1.25rem] justify-center flex-col items-center md:py-[2rem] hidden lg:flex">
          <p className="text-[1rem] font-medium md:text-[1.5rem]">
            {itemsCount}
          </p>
          <p className="uppercase text-[0.75rem] md:text-[1rem]">Items</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
