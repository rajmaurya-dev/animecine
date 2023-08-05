"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useAnimeDetails, useAnimeRecommendationById } from "@/hooks/useJikan";
import AnimeDetail from "@/components/Details";
import AnimeCard from "@/components/AnimeCard";
import { Spinner } from "@nextui-org/react";

const TopAnimeDetail = ({ params }) => {
  const id = params.id;
  const {
    data: animeDetails,
    isLoading: isLoadingAnimeDetails,
    isError: isErrorAnimeDetails,
    error: errorAnimeDetails,
  } = useAnimeDetails(id);

  const { data: animeRecom } = useAnimeRecommendationById(id);
  const limitedData = animeRecom?.data?.slice(0, 5);
  return (
    <>
      <div className="h-[100vh] bg-black">
        {isLoadingAnimeDetails ? (
          <div className="flex justify-center items-center w-[100vw] h-[90vh] bg-black">
            <Spinner label="Fetching Details" color="primary" size="lg" />
          </div>
        ) : animeDetails ? (
          <AnimeDetail data={animeDetails.data} />
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </>
  );
};

export default TopAnimeDetail;
