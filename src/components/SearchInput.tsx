import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";

export default function SearchInput() {
  return (
    <InputGroup flex="1" startElement={<BsSearch />}>
      <Input
        borderRadius={20}
        placeholder="search games ..."
        variant="flushed"
      />
    </InputGroup>
  );
}
