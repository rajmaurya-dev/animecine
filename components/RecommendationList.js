import React, { useEffect, useState } from "react";
import { Pagination, Skeleton } from "@nextui-org/react";
import AnimeCard from "./AnimeCard";
import Link from "next/link";

const RecommendationList = ({
  pageTitle,
  pathname,
  animeData: initialAnimeData,
}) => {
  const [animeData, setAnimeData] = useState(initialAnimeData);
  useEffect(() => {
    if (initialAnimeData) {
      setAnimeData(initialAnimeData);
    }
  }, [initialAnimeData]);
  return (
    <>
      <main className="bg-black darkMode">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-2xl text-white py-3">{pageTitle}</h1>
        </div>
        <div className="">
          {animeData ? (
            <div className="flex gap-7 flex-wrap justify-center items-center">
              {animeData.map((recommendation) => (
                <Link
                  key={recommendation.entry.mal_id}
                  href={`/${pathname}/${recommendation.entry.mal_id}`}
                >
                  <AnimeCard
                    rank={
                      recommendation.entry.rank ||
                      recommendation.entry.favorites
                    }
                    title={recommendation.entry.title}
                    imgUrl={recommendation.entry.images?.jpg.image_url}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div>No Data Found</div>
          )}
        </div>
      </main>
    </>
  );
};

export default RecommendationList;
