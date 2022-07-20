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
import CardGridCard from "./CardGridCard";

type Props = {};
const sampleItems = [
  "Fast",
  "Efficient",
  "Easy-To-Use",
  "Cheap",
  "Lightweight",
  "Quickstart",
  "Well-Supported",
  "Tested",
  "Fun",
];
export default function CardGrid({}: Props) {
  return (
    <SimpleGrid columns={3} spacing={"25px"} mt={"25px"}>
      {sampleItems.map((val, i) => (
        <CardGridCard cardText={val} key={`cardNum${i}`} />
      ))}
    </SimpleGrid>
  );
}
