import useGenres, { Genre } from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import {
  HStack,
  Image,
  Link,
  ListItem,
  ListRoot,
  Spinner,
} from "@chakra-ui/react";

interface Props {
  onSelectgenre: (genre: Genre) => void;
}
export default function GenreList({ onSelectgenre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <ListRoot variant="plain">
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Link
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
  );
}
