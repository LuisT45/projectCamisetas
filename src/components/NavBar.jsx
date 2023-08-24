import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  Flex,
  Box,
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div>
      <Flex>
        <Box p="4">
          <h3>Camisetas-Store</h3>
        </Box>
        <Spacer />
        <Box p="4">
          <Menu>
            <MenuButton>Categorías</MenuButton>
            <MenuList>
              <MenuItem>Category A</MenuItem>
              <MenuItem>Category B</MenuItem>
              <MenuItem>Category C</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p="4">
          <CartWidget />
        </Box>
      </Flex>
    </div>
  );
};

export default NavBar;
