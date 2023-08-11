"use client";

import AnimeDetail from "@/components/Details";
import RecommendationList from "@/components/RecommendationList";
import { useAnimeDetails, useAnimeRecommendationById } from "@/hooks/useJikan";
import { Spinner } from "@nextui-org/react";

const UpcomingAnimeDetails = ({ params }) => {
  const id = params.id;
  const { data: animeDetails, isLoading: isLoadingAnimeDetails } =
    useAnimeDetails(id);
  const { data: animeRecom, isLoading: isLoadingAnimeRecom } =
    useAnimeRecommendationById(id);
  const limitedData = animeRecom?.data?.slice(0, 10);
  return (
    <>
      <div className="min-h-[100vh] bg-black">
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
              pathname={"ongoing"}
            />
          ) : (
            <div>No Recommendation found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default UpcomingAnimeDetails;
