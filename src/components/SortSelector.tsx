import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { BsChevronDown } from "react-icons/bs";

export default function SortSelector() {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          order by: Relevance
          {/* {selectedPlatform?.name || "Platforms"} */}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="test">test</MenuItem>
        <MenuItem value="test1">test2</MenuItem>
        {/* {data.map((d) => (
          <MenuItem
            onClick={() => onSelectPlatform(d)}
            key={d.id}
            value={d.name}
          >
            {d.name}
          </MenuItem>
        ))} */}
      </MenuContent>
    </MenuRoot>
  );
}
