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
const slideList = [
  "Slide number 1",
  "Slide number 2",
  "Slide number 3",
  "Slide number 4",
  "Slide number 5",
];
import carouselStyles from "./Carousel.module.css";
import CarouselCard from "./CarouselCard";

export default function Carousel({}: Props) {
  return (
    <Flex>
      <Button></Button>
      {slideList.map((val, i) => (
        <CarouselCard cardText={val} key={`CarouselSlideNumber${i}`} />
      ))}
      <Button></Button>
    </Flex>
  );
}
