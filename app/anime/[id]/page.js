"use client";
import React from "react";

import {
  useAnimeDetails,
  useAnimeNews,
  useAnimeRecommendationById,
  useAnimeStream,
} from "@/hooks/useJikan";
import AnimeDetail from "@/components/Details";
import { Spinner } from "@nextui-org/react";
import RecommendationList from "@/components/RecommendationList";

const TopAnimeDetail = ({ params }) => {
  const id = params.id;
  const { data: animeDetails, isLoading: isLoadingAnimeDetails } =
    useAnimeDetails(id);
  const { data: animeStream, isLoading: isLoadingAnimeStream } =
    useAnimeStream(id);
  const { data: animeNews, isLoading: isLoadingAnimeNews } = useAnimeNews(id);

  const { data: animeRecom, isLoading: isLoadingAnimeRecom } =
    useAnimeRecommendationById(id);
  const limitedData = animeRecom?.data?.slice(0, 10);
  return (
    <>
      <div className="pb-5 bg-black min-h-screen">
        {isLoadingAnimeDetails ? (
          <div className="flex justify-center items-center w-[100vw] h-[90vh] bg-black">
            <Spinner label="Fetching Details" color="primary" size="lg" />
          </div>
        ) : animeDetails ? (
          <AnimeDetail data={animeDetails.data} />
        ) : (
          <div>No Data Found</div>
        )}
        <div>
          {isLoadingAnimeRecom ? (
            <div className="flex justify-center items-center w-[100vw] h-[90vh] bg-black">
              <Spinner
                label="Fetching recommendations"
                color="primary"
                size="lg"
              />
            </div>
          ) : animeRecom ? (
            <RecommendationList
              animeData={limitedData}
              pageTitle={"Recommended for you"}
              pathname={"anime"}
            />
          ) : (
            <div>No Recommendation found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default TopAnimeDetail;
