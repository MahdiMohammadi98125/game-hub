import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort: by relevance
      </MenuButton>
      <MenuList>
        <MenuItem>sort by name</MenuItem>
        <MenuItem>sort by type</MenuItem>
        <MenuItem>asc</MenuItem>
        <MenuItem>desc</MenuItem>
        <MenuItem>sort by price</MenuItem>
        <MenuItem>sort all</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
