"use client";
import AnimeCard from "@/components/AnimeCard";
import { useJikanSearch } from "@/hooks/useJikan";
import { Input, Spinner } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

const page = () => {
  const [search, setSearch] = useState("one piece");
  const [debouncedSearch, setDebouncedSearch] = useState("one piece");
  const queryKey = useMemo(() => [debouncedSearch], [debouncedSearch]);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 3000);

    return () => clearTimeout(debounceTimeout);
  }, [search]);

  const { data: animeData, isLoading } = useJikanSearch(queryKey, {});

  return (
    <div className="flex flex-col items-center mt-10 min-h-screen">
      <div className="text-3xl font-bold mb-5">Anime Search</div>
      <div className="my-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center mx-auto rounded-lg overflow-hidden"
        >
          <Input
            type="text"
            value={search}
            color="primary"
            className="max-w-[220px]"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for anime..."
          />
        </form>
      </div>
      <div className="">
        {isLoading ? (
          <div className="flex justify-center items-center w-[100vw] h-[90vh] bg-black">
            <Spinner
              label="Fetching data from server"
              color="primary"
              size="lg"
            />
          </div>
        ) : animeData && animeData.data.length > 0 ? (
          <div className="flex gap-7 flex-wrap justify-center items-center">
            {animeData.data.map((anime) => (
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
          <div className="h-screen">No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default page;
