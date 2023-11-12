import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenShoots from "./hooks/useScreenShoots";

interface Props {
  gameId: number;
}

const GameScreenshoots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenShoots(gameId);

  if (error) throw error;
  if (isLoading) return null;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshoots;
