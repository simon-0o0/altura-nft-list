import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="fixed z-50 flex h-[5rem] w-full items-center bg-neutral400 px-[5%] md:px-[10%] text-neutral50">
      <Link href="/">
        <h1 className="text-[1rem] font-bold md:text-[1.5rem]">
          Altura NFT List
        </h1>
      </Link>
    </div>
  );
};

export default Header;
