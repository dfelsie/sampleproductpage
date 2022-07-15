import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  Button,
} from "@chakra-ui/react";

type Props = {};
export default function AttributeGridSec({}: Props) {
  return (
    <Flex>
      <Flex flexDirection={"column"}>
        <h4>Small Top Message</h4>
        <h2>Product Statement</h2>
        <h3>Describe the above statement. Isn't it great?</h3>
        <Button>Read More</Button>
      </Flex>
      <Box>Smaller Grid Section</Box>
    </Flex>
  );
}
