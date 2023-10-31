import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  const { data, isLoading, error } = useData<Game>(
    "/games",
    {
      params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

  return { data, isLoading, error };
};
export default useGames;
