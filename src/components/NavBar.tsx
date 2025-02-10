import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./searchInput";

export default function NavBar() {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      {/* <ColorModeSwitch /> */}
      <ColorModeButton />
    </HStack>
  );
}
