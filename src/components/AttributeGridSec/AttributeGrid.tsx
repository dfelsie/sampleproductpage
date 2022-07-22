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
import AttributeGridCard from "./AttributeGridCard";

type Props = {};
const sampleItems = ["Fast", "Efficient", "Easy-To-Use", "Cheap"];
export default function AttributeGrid({}: Props) {
  return (
    <SimpleGrid columns={2} spacing={"20px"} my={"25px"}>
      {sampleItems.map((val, i) => (
        <AttributeGridCard cardText={val} key={`attributeGridCardNum${i}`} />
      ))}
    </SimpleGrid>
  );
}
