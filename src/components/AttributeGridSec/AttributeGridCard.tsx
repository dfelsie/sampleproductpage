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
  cardText: string;
};
import cardGridStyles from "./AttributeGrid.module.css";
export default function AttibuteGridCard({ cardText }: Props) {
  return (
    <Box className={cardGridStyles.attributeCard}>
      <p>{cardText}</p>
    </Box>
  );
}
