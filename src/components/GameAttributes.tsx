import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import GameScore from "./GameScore";
import Game from "./entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid as="dl" columns={2}>
      <DefinitionItem
        term={"platforms"}
        children={game.parent_platforms.map(({ platform }) => {
          return <Text key={platform.id}>{platform.name}</Text>;
        })}
      />
      <DefinitionItem term="metacritic">
        <GameScore score={game.metacritic} />
      </DefinitionItem>

      <DefinitionItem term="genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
