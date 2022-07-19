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
import sharedStyles from "../Shared.module.css";
import carouselStyles from "./Carousel.module.css";

export default function CarouselSec({}: Props) {
  return (
    <Flex className={sharedStyles.basicSec} id={carouselStyles.carouselSec}>
      Carousel
    </Flex>
  );
}
