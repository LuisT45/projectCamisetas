import React from "react";
import { Center } from "@chakra-ui/react";

const ItemsListConteiner = ({ greeting }) => {
  return (
    <h1>
      <Center h="100px" color="black">
        {greeting}
      </Center>
    </h1>
  );
};

export default ItemsListConteiner;
