import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral400 px-[5%] md:px-[10%] text-neutral50 py-[1rem] flex flex-col gap-[0.5rem] w-full">
      <div className="flex justify-center md:justify-start">
        <h3 className="text-[1rem] font-bold md:text-[1.5rem]">
          Altura NFT List
        </h3>
      </div>
      <div className="md:max-w-[24.25rem] flex justify-center md:justify-start">
        <p className="text-[1rem] text-neutral75 text-center">
          Lorem ipsum dolor sit amet consectetur. Tellus netus est aliquet e rat
          quis morbi varius. Feugiat ac.
        </p>
      </div>
      <div className="flex justify-center md:justify-start">
        <p className="text-[0.75rem] text-neutral75">
          © 2023. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
