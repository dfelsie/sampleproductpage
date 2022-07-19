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
import carouselStyles from "./Carousel.module.css";

export default function CarouselCard({ cardText }: Props) {
  return <Box> {cardText} </Box>;
}
