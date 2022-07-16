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
import navbarStyles from "./Navbar.module.css";

type Props = {};
export default function Navbar({}: Props) {
  return (
    <Flex id={navbarStyles.navDiv}>
      <Box>Logo</Box>
      <Flex id={navbarStyles.centerLinks}>
        <a>Link 1</a>
        <a>Link 2</a>
        <a>Link 3</a>
      </Flex>
      <Flex id={navbarStyles.navbarButtonGroup}>
        <Button className={navbarStyles.navbarTransparentButton}>
          Button 1
        </Button>
        <Button className={navbarStyles.navbarColoredButton}>Button 2</Button>
      </Flex>
    </Flex>
  );
}
