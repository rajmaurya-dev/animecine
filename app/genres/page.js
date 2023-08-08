"use client";
import AnimeCard from "@/components/AnimeCard";
import { useAnimeGenreId, useAnimeGenres } from "@/hooks/useJikan";
import {
  Button,
  Chip,
  Divider,
  Pagination,
  Skeleton,
  Spinner,
} from "@nextui-org/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const AnimeGenres = () => {
  const searchParams = useSearchParams();

  const genre_id = searchParams.get("genre_id");
  const { data: genresData } = useAnimeGenres();
  const [showAll, setShowAll] = useState(false);
  const [selectedMalId, setSelectedMalId] = useState(1);
  const [page, setPage] = useState(1);
  const {
    data: animeData,
    isLoading: isLoadingAnimeData,
    refetch,
  } = useAnimeGenreId(selectedMalId, page);
  const [isLoaded, setIsLoaded] = useState(isLoadingAnimeData);
  const chipsToShow = showAll
    ? genresData?.data
    : (genresData?.data || []).slice(0, 20);

  const handleShowMore = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const handleChipClick = async (mal_id) => {
    setSelectedMalId(mal_id);
    await refetch(mal_id);
  };
  const handleChange = (value) => {
    setPage(value);
  };
  useEffect(() => {
    if (genre_id) {
      setSelectedMalId(genre_id);
    }
  }, [genre_id]);
  return (
    <>
      <h1 className="text-xl font-bold mb-4 text-center">
        Explore anime by Genres
      </h1>
      <div className="flex flex-col md:flex-row relative ">
        {/* Sidebar */}
        <aside className="md:w-1/4 w-full md:overflow-y-scroll md:h-[100vh] md:sticky md:top-0 flex md:flex-row flex-col bg-black text-white">
          <div className="flex justify-center flex-wrap gap-1 items-center ">
            {chipsToShow &&
              chipsToShow.map((genre) => (
                <Button
                  key={genre.mal_id}
                  color="primary"
                  variant="flat"
                  className="text-sm cursor-pointer"
                  onClick={() => handleChipClick(genre.mal_id)}
                >
                  {genre.name}
                </Button>
              ))}
            {genresData?.data?.length > 20 && (
              <Button
                onClick={handleShowMore}
                color="primary"
                variant="ghost"
                size="sm"
                radius="full"
              >
                {showAll ? "Show Less" : "Show More"}
              </Button>
            )}
          </div>
          <Divider orientation="vertical" className="hidden md:block ml-3" />
          <Divider orientation="horizontal" className="md:hidden mt-3" />
        </aside>

        {/* Main Content */}
        <main className="md:w-3/4 w-full min-h-[100vh] mt-4 md:mt-0 ">
          <div className="">
            {isLoadingAnimeData ? (
              <div className="flex justify-center items-center w-[100vw] h-[90vh] bg-black">
                <Spinner
                  label="Fetching data from server"
                  color="primary"
                  size="lg"
                />
              </div>
            ) : animeData ? (
              <div className="flex gap-2 flex-wrap justify-center items-center">
                {animeData.data?.map((anime) => (
                  <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`}>
                    <AnimeCard
                      rank={anime.rank || anime.favorites}
                      title={anime.title || anime.name}
                      imgUrl={anime.images?.jpg.image_url}
                    />
                  </Link>
                ))}
              </div>
            ) : (
              <div>No Data Found</div>
            )}
          </div>
          <div className="flex justify-center py-5">
            {animeData && (
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
      </div>
    </>
  );
};

export default AnimeGenres;
