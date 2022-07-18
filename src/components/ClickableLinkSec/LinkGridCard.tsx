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

type Props = {
  linkHeadText: string;
};
export default function LinkGridCard({ linkHeadText }: Props) {
  return <Box> {linkHeadText} </Box>;
}
