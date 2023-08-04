import List from "@/components/List";
import React from "react";

const Trending = () => {
  return (
    <List
      queryKey={["seasons/upcoming"]}
      limitNumber={10}
      pageTitle={"Top Characters"}
    />
  );
};

export default Trending;
