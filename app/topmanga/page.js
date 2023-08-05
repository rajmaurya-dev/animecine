"use client";
import AnimeCard from "@/components/AnimeCard";
import List from "@/components/List";
import { useJikan } from "@/hooks/useJikan";
import { Pagination, Skeleton, Spinner } from "@nextui-org/react";
import React, { useState } from "react";

const TopManga = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data: topManga, isLoading: isLoadingTopManga } = useJikan(
    ["top/manga"],
    page,
    limit
  );
  const handleChange = (value) => {
    setPage(value);
  };
  const [isLoaded, setIsLoaded] = useState(isLoadingTopManga);
  return (
    <>
      <List
        queryKey={["top/manga"]}
        limitNumber={10}
        pageTitle={"Top Manga"}
        pathname={"topmanga"}
      />
    </>
  );
};

export default TopManga;
