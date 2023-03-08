import React, { useCallback, useState } from "react";
import copy from "copy-to-clipboard";

interface CopyToClipboardInterface {
  text: string;
  children: React.ReactElement;
}

const CopyToClipboard = ({ text, children }: CopyToClipboardInterface) => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = useCallback(() => {
    setIsShow(true);
    copy(text);
    setTimeout(() => {
      setIsShow(false);
    }, 1000);
  }, [text]);

  return (
    <div className="relative w-fit hover:cursor-pointer" onClick={handleClick}>
      {children}
      <div
        className={`${
          isShow ? "block" : "hidden"
        } absolute top-0 right-0 translate-y-[-50%] whitespace-nowrap rounded-[0.25rem] bg-gray-700 px-[0.5rem] py-[0.1rem] text-[0.75rem] text-white`}
      >
        Copied
      </div>
    </div>
  );
};

export default CopyToClipboard;
