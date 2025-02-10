import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedSortValue: string;
  onSortSelect: (sortvalue: string) => void;
}

export default function SortSelector({
  selectedSortValue,
  onSortSelect,
}: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortValue
  );
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          order by: {currentSortOrder?.label || "Relevance"}
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders.map((d) => (
          <MenuItem
            onClick={() => onSortSelect(d.value)}
            key={d.value}
            value={d.value}
          >
            {d.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
}
