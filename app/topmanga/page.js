"use client";
import AnimeCard from "@/components/AnimeCard";
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
      <main className="bg-black darkMode">
        <div className=" flex justify-center items-center">
          <h1 className="font-bold text-2xl text-white">Top Anime</h1>
        </div>
        <div className="">
          {isLoadingTopManga ? (
            <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-black">
              <Spinner label="Fetching Top Manga" color="primary" size="lg" />
            </div>
          ) : topManga ? (
            <div className="flex gap-2 flex-wrap justify-center items-center">
              {topManga.data.map((manga) => {
                return (
                  <AnimeCard
                    rank={manga.rank}
                    title={manga.title}
                    imgUrl={manga.images?.jpg.image_url}
                    key={manga.mal_id}
                  />
                );
              })}
            </div>
          ) : (
            <div>No Data Found</div>
          )}
        </div>
        <div className="flex justify-center py-5">
          {topManga && (
            <Skeleton isLoaded={isLoaded}>
              <Pagination
                total={topManga.pagination?.last_visible_page}
                initialPage={page}
                onChange={handleChange}
                color="primary"
                className="gap-2 bg-black"
                radius="full"
                showControl
              />
            </Skeleton>
          )}
        </div>
      </main>
    </>
  );
};

export default TopManga;
