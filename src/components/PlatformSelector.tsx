import usePlatforms from "@/hooks/usePlatforms";
import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

import { BsChevronDown } from "react-icons/bs";
import { Platform } from "@/hooks/useGames";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}
export default function PlatformSelector({
  selectedPlatform,
  onSelectPlatform,
}: Props) {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || "Platforms"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((d) => (
          <MenuItem
            onClick={() => onSelectPlatform(d)}
            key={d.id}
            value={d.name}
          >
            {d.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
}
