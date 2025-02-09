import { HStack } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { Switch } from "./ui/switch";

export default function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorPalette="green"
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
      >
        Dark Mode
      </Switch>
    </HStack>
  );
}
