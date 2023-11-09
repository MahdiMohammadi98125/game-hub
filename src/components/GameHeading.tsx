import { Heading } from "@chakra-ui/react";
import useGenre from "./hooks/useGenre";
import usePlatform from "./hooks/usePlatform";
import useGameQueryStore from "./store";

const GameHeading = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Game`;
  return (
    <Heading as="h1" fontSize="5xl" paddingBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
