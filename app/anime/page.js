"use client";
import AnimeCard from "@/components/AnimeCard";
import List from "@/components/List";
import { useJikan } from "@/hooks/useJikan";
import { Pagination, Spinner, Skeleton } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";

const TopAnime = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data: topAnime, isLoading: isLoadingTopAnime } = useJikan(
    ["top/anime"],
    page,
    limit
  );
  const [isLoaded, setIsLoaded] = useState(isLoadingTopAnime);
  const handleChange = (value) => {
    setPage(value);
  };
  console.log(page);
  return (
    <>
      <List
        queryKey={["top/anime"]}
        limitNumber={10}
        pageTitle={"Top Anime"}
        pathname={"anime"}
      />
    </>
  );
};

export default TopAnime;
