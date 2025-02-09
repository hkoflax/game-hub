import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";

export default function NavBar() {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <ColorModeButton />
    </HStack>
  );
}
