// src/hooks/useJikan.js
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useJikan(queryKey, page, limit) {
  return useQuery([queryKey, page, limit], async () => {
    const query = `?page=${page}&limit=${limit}`;
    const response = await axios.get(
      `https://api.jikan.moe/v4/${queryKey[0]}${query}`
    );
    return response.data;
  });
}

export function useAnimeDetails(id) {
  return useQuery(["animeDetails", id], async () => {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    return response.data;
  });
}
export function useMangaDetails(id) {
  return useQuery(["mangaDetails", id], async () => {
    const response = await axios.get(`https://api.jikan.moe/v4/manga/${id}`);
    return response.data;
  });
}

export function useAnimeRecommendationById(id) {
  return useQuery(["animeRecommendation", id], async () => {
    const response = await axios.get(
      `https://api.jikan.moe/v4/anime/${id}/recommendations`
    );
    return response.data;
  });
}
