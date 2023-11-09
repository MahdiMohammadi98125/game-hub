import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "./hooks/useGenres";
import usePlatforms from "./hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres.results.find((g) => g.id === gameQuery.genreId);
  const { data: platforms } = usePlatforms();
  const platform = platforms.results.find((p) => p.id === gameQuery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Game`;
  return (
    <Heading as="h1" fontSize="5xl" paddingBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
