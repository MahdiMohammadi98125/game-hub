import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../ExpandableText";
import useGame from "../hooks/useGame";
import GameAttributes from "../GameAttributes";
import GameTrailer from "../GameTrailer";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <Box>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
    </Box>
  );
};

export default GameDetailPage;
