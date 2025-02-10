import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./searchInput";

interface Props {
  onSearch: (searchvalue: string) => void;
}

export default function NavBar({ onSearch }: Props) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      {/* <ColorModeSwitch /> */}
      <ColorModeButton />
    </HStack>
  );
}
