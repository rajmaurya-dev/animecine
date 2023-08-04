"use client";
import React, { useState } from "react";
import { Pagination, Spinner, Skeleton } from "@nextui-org/react";
import { useJikan } from "@/hooks/useJikan";
import AnimeCard from "./AnimeCard";

const List = ({ queryKey, limitNumber, pageTitle, showPagination = true }) => {
  const [page, setPage] = useState(1);
  let limit = limitNumber;
  const { data: animeData, isLoading: isLoadingAnime } = useJikan(
    queryKey,
    page,
    limit
  );
  const [isLoaded, setIsLoaded] = useState(isLoadingAnime);

  const handleChange = (value) => {
    setPage(value);
  };

  return (
    <>
      <main className="bg-black darkMode">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-2xl text-white py-3">{pageTitle}</h1>
        </div>
        <div className="">
          {isLoadingAnime ? (
            <div className="flex justify-center items-center w-[100vw] h-[90vh] bg-black">
              <Spinner label="Fetching top anime" color="primary" size="lg" />
            </div>
          ) : animeData ? (
            <div className="flex gap-[7px] flex-wrap justify-center items-center">
              {animeData.data?.map((anime) => (
                <AnimeCard
                  rank={anime.rank || anime.favorites}
                  title={anime.title || anime.name}
                  imgUrl={anime.images?.jpg.image_url}
                  key={anime.mal_id}
                />
              ))}
            </div>
          ) : (
            <div>No Data Found</div>
          )}
        </div>
        <div className="flex justify-center py-5">
          {animeData && showPagination && (
            <Skeleton isLoaded={isLoaded}>
              <Pagination
                total={animeData.pagination?.last_visible_page}
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

export default List;
