import { Game } from "@/hooks/useGames";
import { Card, Heading, Image, Text } from "@chakra-ui/react";
import { GiPlatform } from "react-icons/gi";
import PlatformIcon from "./PlatformIcon";

interface Props {
  game: Game;
}
export default function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIcon
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
}
