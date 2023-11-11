import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <Box>
      <Heading>{game.name}</Heading>
      <Text mt={4}>{game.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
