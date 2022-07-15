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
export default function Navbar({}: Props) {
  return (
    <Flex>
      <Box>Logo</Box>
      <Flex>Main Links</Flex>
      <Flex>Button Group</Flex>
    </Flex>
  );
}
