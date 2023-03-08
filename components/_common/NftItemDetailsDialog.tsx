import { useGetParsedMint } from "@/hooks/useGetParsedMint";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Dispatch, Fragment, SetStateAction, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { truncateString } from "utils/helper";
import CopyToClipboard from "./CopyToClipboard";
import Link from "next/link";
import { ME_DETAIL_BASE_URI } from "utils/constants";
import LoadingSpinner from "./LoadingSpinner";

interface NftItemDetailsDialogProps {
  isShow: boolean;
  title: string;
  mint: string;
  setIsShow: Dispatch<SetStateAction<boolean>>;
}

const OutLinkButton = ({ link, text }: { link: string; text: string }) => {
  return (
    <Link href={link} target="_blank" rel="noreferrer nofollow">
      <button className="bg-yellow400 rounded-[0.25rem] shadow text-[0.75rem] px-[0.5rem] text-neutral500 min-w-[5rem] font-bold hover:bg-yellow300">
        {text}
      </button>
    </Link>
  );
};

const NftItemDetailsDialog = ({
  isShow,
  title,
  mint,
  setIsShow,
}: NftItemDetailsDialogProps) => {
  const { data, isFetched, isLoading } = useGetParsedMint(mint);
  const handleCloseModal = () => {
    setIsShow(false);
  };

  return (
    <Transition appear show={isShow} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={handleCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[48rem] transform rounded-[0.25rem] bg-neutral300 align-middle transition-all overflow-x-hidden text-neutral50 shadow">
                <Dialog.Title
                  as="div"
                  className="flex h-[3rem] p-[0.5rem] justify-between items-center border-b-[0.065rem] border-neutral100"
                >
                  <p className="font-bold uppercase tracking-wide">{title}</p>
                  <AiFillCloseCircle
                    className="text-neutral100 hover:text-neutral50 hover:cursor-pointer"
                    onClick={handleCloseModal}
                  />
                </Dialog.Title>
                <div className="flex max-h-[24rem] flex-row overflow-y-auto p-[1rem] md:max-h-[36rem]">
                  {!isLoading && isFetched && data && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem]">
                      <Image
                        src={data.externalMetadata.image}
                        width={720}
                        height={720}
                        alt={`$data.externalMetadata.name} NFT image`}
                        className="rounded-[1rem]"
                      />
                      <div className="flex flex-col gap-[1rem] items-start">
                        <div className="flex flex-col justify-start items-start">
                          <h3 className="font-extrabold text-[1rem] text-yellow300  md:text-[1.5rem]">
                            {data.externalMetadata.name}
                          </h3>{" "}
                          <p className="font-bold">
                            {data.externalMetadata.collection?.name}
                          </p>
                          <p className="text-[0.75rem] mt-[0.25rem] text-neutral100 text-left">
                            {data.externalMetadata.description}
                          </p>
                        </div>
                        <div>
                          <div className="flex text-[0.75rem] gap-[0.5rem]">
                            <h4 className="text-yellow300 font-bold">MINT: </h4>
                            <CopyToClipboard
                              text={data.metadata.mint.toBase58()}
                            >
                              <p className="text-neutral100 font-medium hover:text-neutral50">
                                {truncateString(
                                  data.metadata.mint.toBase58(),
                                  6
                                )}
                              </p>
                            </CopyToClipboard>
                          </div>
                        </div>
                        <div className="flex flex-col items-start">
                          <h4 className="text-yellow300 font-medium">
                            Traits:
                          </h4>
                          <div className="grid grid-cols-3 gap-[1rem] mt-[0.5rem]">
                            {data.externalMetadata.attributes.map(
                              (attribute) => {
                                return (
                                  <div
                                    key={attribute.trait_type}
                                    className="flex flex-col justify-center items-center text-[0.75rem] gap-[0.25rem] h-[3.5rem] bg-neutral200 rounded-[0.5rem] px-[0.25rem] py-[1rem] overflow-hidden"
                                  >
                                    <h5 className="text-neutral100">
                                      {attribute.trait_type}
                                    </h5>
                                    <p className="font-medium text-[0.875rem]">
                                      {attribute.value}
                                    </p>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                        <div className="mt-[1rem] w-full flex gap-[0.5rem] justify-center sm:justify-end">
                          <OutLinkButton
                            text="MagicEden"
                            link={`${ME_DETAIL_BASE_URI}${data.metadata.mint.toBase58()}`}
                          />
                          <OutLinkButton
                            text="OpenSea"
                            link={`${ME_DETAIL_BASE_URI}${data.metadata.mint.toBase58()}`}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {!isLoading && isFetched && !data && (
                    <div className="flex items-center justify-center h-[8rem] font-bold w-full">
                      Something went wrong, Please try again later.
                    </div>
                  )}
                  {isLoading && <LoadingSpinner />}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NftItemDetailsDialog;
