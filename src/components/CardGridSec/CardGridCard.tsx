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
import cardGridStyles from "./CardGrid.module.css";
export default function CardGridCard({ cardText }: Props) {
  return (
    <Box className={cardGridStyles.gridCard}>
      <p className={cardGridStyles.gridCardText}>{cardText}</p>
    </Box>
  );
}
