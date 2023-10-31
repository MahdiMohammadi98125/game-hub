import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "./hooks/useGames";
import CardIconList from "./CardIconList";
import GameScore from "./GameScore";

interface CardInterface {
  game: Game[];
}
const GameCard = ({ game }: CardInterface) => {
  return (
    <Card borderRadius="10" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <CardIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <GameScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
