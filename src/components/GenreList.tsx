import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "./hooks/useGenres";
import getCroppedImageUrl from "./services/image-url";
import useGameQueryStore from "./store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  if (error) return;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genre
      </Heading>
      <List>
        {isLoading && <Spinner />}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} py="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                variant="link"
                fontSize="lg"
                onClick={() => {
                  setSelectedGenreId(genre.id);
                }}
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
