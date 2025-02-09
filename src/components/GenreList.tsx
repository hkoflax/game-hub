import useGenres from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import {
  HStack,
  Image,
  ListItem,
  ListRoot,
  Spinner,
  Text,
} from "@chakra-ui/react";

export default function GenreList() {
  const { data, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
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
            <Text fontSize="lg"> {genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </ListRoot>
  );
}
