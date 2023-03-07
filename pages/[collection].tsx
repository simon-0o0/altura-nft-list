import { useRouter } from "next/router";
import React from "react";

const Collection = () => {
  const router = useRouter();
  const collection = router.query.collection;

  return <div>{collection}</div>;
};

export default Collection;
