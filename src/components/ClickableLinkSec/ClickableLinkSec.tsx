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
export default function ClickableLinkSec({}: Props) {
  return (
    <Flex>
      <Flex flexDir={"column"}>
        <h4>Here's some pretty cool links!</h4>
        <Box>Grid of links with Images</Box>
      </Flex>
    </Flex>
  );
}
