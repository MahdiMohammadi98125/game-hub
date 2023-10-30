import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "./hooks/useGames";
import CardIconList from "./CardIconList";

interface CardInterface {
  game: Game[];
}
const GameCard = ({ game }: CardInterface) => {
  return (
    <Card borderRadius="10" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="xl">{game.name}</Heading>
        <CardIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
