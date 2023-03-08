import React from "react";
import { BsDiscord, BsGlobe, BsTwitter } from "react-icons/bs";
import Link from "next/link";

interface SocialsProps {
  homepage: string;
  twitter: string;
  discord: string;
}

const Socials = ({ homepage, twitter, discord }: SocialsProps) => {
  return (
    <div className="flex gap-[0.5rem] text-neutral50 md:gap-[1rem] items-center">
      <Link href={homepage} target="_blank">
        <BsGlobe className="hover:text-neutral100" />
      </Link>
      <Link href={twitter} target="_blank">
        <BsTwitter className="hover:text-neutral100" />
      </Link>
      <Link href={discord} target="_blank">
        <BsDiscord className="hover:text-neutral100" />
      </Link>
    </div>
  );
};

export default Socials;
