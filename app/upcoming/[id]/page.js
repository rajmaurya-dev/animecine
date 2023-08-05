"use client";

import AnimeDetail from "@/components/Details";
import { useAnimeDetails } from "@/hooks/useJikan";
import { Spinner } from "@nextui-org/react";

const UpcomingAnimeDetails = ({ params }) => {
  const id = params.id;
  const {
    data: animeDetails,
    isLoading: isLoadingAnimeDetails,
    isError: isErrorAnimeDetails,
    error: errorAnimeDetails,
  } = useAnimeDetails(id);

  return (
    <>
      <div>
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

export default UpcomingAnimeDetails;
