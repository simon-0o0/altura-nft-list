import Link from "next/link";
import React from "react";

const GoHomeButton = () => {
  return (
    <Link href="/">
      <button className="font-bold text-neutral50 px-[1rem] py-[0.5rem] rounded-[0.25rem] bg-yellow500 hover:bg-yellow400">
        Home
      </button>
    </Link>
  );
};

export default GoHomeButton;
