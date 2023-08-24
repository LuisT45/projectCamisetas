import { Divider, Flex, Box } from "@chakra-ui/react";
import React from "react";

const CartWidget = () => {
  return (
    <div>
      <Flex>
        <Box p="2">
          <span class="material-symbols-outlined">shopping_cart</span>
        </Box>
        <Divider></Divider>
        <Box p="2">
          <p>4</p>
        </Box>
      </Flex>
    </div>
  );
};

export default CartWidget;
