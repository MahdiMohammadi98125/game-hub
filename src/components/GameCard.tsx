import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import Game from "./entities/Game";
import CardIconList from "./CardIconList";
import GameScore from "./GameScore";
import getCroppedImageUrl from "./services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface CardInterface {
  game: Game;
}
const GameCard = ({ game }: CardInterface) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={1}>
          <CardIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <GameScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="xl">
          <Link to={`games/${game.slug}`}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
