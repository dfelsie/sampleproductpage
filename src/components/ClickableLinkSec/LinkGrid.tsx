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
  SimpleGrid,
} from "@chakra-ui/react";
import LinkGridCard from "./LinkGridCard";

type Props = {};
const txtAry = [
  "Link Header Text",
  "Link Header Text",
  "Link Header Text",
  "Link Header Text",
];
export default function LinkGrid({}: Props) {
  return (
    <SimpleGrid columns={2}>
      {txtAry.map((val, i) => (
        <LinkGridCard linkHeadText={val} key={`LinkGridCardNo${i}`} />
      ))}
    </SimpleGrid>
  );
}
