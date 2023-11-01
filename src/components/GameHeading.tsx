import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Game`;
  return (
    <Heading as="h1" fontSize="3xl" paddingBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
