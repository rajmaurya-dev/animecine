"use client";
import { useJikan } from "@/hooks/useJikan";
import { Skeleton, Spinner } from "@nextui-org/react";
export default function AnimeList() {
  const { data: topAnime, isLoading: isLoadingTopAnime } = useJikan([
    "top/anime",
  ]);
  const { data: seasonalAnime, isLoading: isLoadingSeasonalAnime } = useJikan([
    "seasons/upcoming",
  ]);

  if (isLoadingTopAnime || isLoadingSeasonalAnime) {
    return <Spinner label="Loading..." color="primary" size="lg" />;
  }

  return (
    <div>
      <h1>Top Anime</h1>
      <ul>
        {topAnime.data.map((anime) => (
          <li key={anime.mal_id}>{anime.title}</li>
        ))}
      </ul>

      <h1>Seasonal Anime</h1>
      <ul>
        {seasonalAnime.data.map((anime) => (
          <li key={anime.mal_id}>{anime.title}</li>
        ))}
      </ul>
    </div>
  );
}
