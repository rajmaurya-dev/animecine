import List from "@/components/List";
import React from "react";

const Trending = () => {
  return (
    <List
      queryKey={["seasons/now"]}
      limitNumber={10}
      pageTitle={"Ongoing Anime"}
      pathname={"ongoing"}
    />
  );
};

export default Trending;
