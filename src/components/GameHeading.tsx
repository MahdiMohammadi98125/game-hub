import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "./hooks/useGenre";
import usePlatform from "./hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Game`;
  return (
    <Heading as="h1" fontSize="5xl" paddingBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
