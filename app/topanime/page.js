"use client";
import AnimeCard from "@/components/AnimeCard";
import { useJikan } from "@/hooks/useJikan";
import { Pagination, Spinner, Skeleton } from "@nextui-org/react";
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
      <main className="bg-black darkMode">
        <div className=" flex justify-center items-center">
          <h1 className="font-bold text-2xl text-white">Top Anime {page}</h1>
        </div>
        <div className="">
          {isLoadingTopAnime ? (
            <div className="flex justify-center items-center w-[100vw] h-[90vh] bg-black">
              <Spinner label="Fetching top anime" color="primary" size="lg" />
            </div>
          ) : topAnime ? (
            <div className="flex gap-2 flex-wrap justify-center items-center">
              {topAnime.data?.map((anime) => {
                return (
                  <AnimeCard
                    rank={anime.rank}
                    title={anime.title}
                    imgUrl={anime.images?.jpg.image_url}
                    key={anime.mal_id}
                  />
                );
              })}
            </div>
          ) : (
            <div>No Data Found</div>
          )}
        </div>
        <div className="flex justify-center py-5">
          {topAnime && (
            <Skeleton isLoaded={isLoaded}>
              <Pagination
                total={topAnime.pagination?.last_visible_page}
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

export default TopAnime;
