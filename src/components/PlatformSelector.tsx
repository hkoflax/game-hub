import usePlatforms from "@/hooks/usePlatforms";
import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

import { BsChevronDown } from "react-icons/bs";

export default function PlatformSelector() {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Platform <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((d) => (
          <MenuItem key={d.id} value={d.slug}>
            {d.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
}
