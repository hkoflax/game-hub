import useGenres, { Genre } from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import {
  Heading,
  HStack,
  Image,
  Link,
  ListItem,
  ListRoot,
  Spinner,
} from "@chakra-ui/react";

interface Props {
  selectedgenre: Genre | null;
  onSelectgenre: (genre: Genre) => void;
}
export default function GenreList({ selectedgenre, onSelectgenre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginY={3}>
        Genres
      </Heading>
      <ListRoot variant="plain">
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Link
                fontWeight={genre.id === selectedgenre?.id ? "bold" : "normal"}
                onClick={() => onSelectgenre(genre)}
                href="#"
                fontSize="lg"
                variant="plain"
              >
                {genre.name}
              </Link>
            </HStack>
          </ListItem>
        ))}
      </ListRoot>
    </>
  );
}
