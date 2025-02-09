import useGenres, { Genre } from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, ListItem, ListRoot, Text } from "@chakra-ui/react";

export default function GenreList() {
  const { data } = useGenres();

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
