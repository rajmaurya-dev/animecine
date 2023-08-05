"use client";

import MangaDetail from "@/components/MangaDetails";
import { useMangaDetails } from "@/hooks/useJikan";
import { Spinner } from "@nextui-org/react";

const MangaDetails = ({ params }) => {
  const id = params.id;
  const {
    data: mangaDetails,
    isLoading: isLoadingAnimeDetails,
    isError: isErrorAnimeDetails,
    error: errorAnimeDetails,
  } = useMangaDetails(id);

  return (
    <>
      <div className="h-[100vh] bg-black">
        {isLoadingAnimeDetails ? (
          <div className="flex justify-center items-center w-[100vw] h-[90vh] bg-black">
            <Spinner label="Fetching Details" color="primary" size="lg" />
          </div>
        ) : mangaDetails ? (
          <MangaDetail data={mangaDetails.data} />
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </>
  );
};

export default MangaDetails;
