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
import styles from "./SimpleHero.module.css";
import sharedStyles from "../Shared.module.css";

type Props = {};
export default function SimpleHero({}: Props) {
  return (
    <Flex id={styles.simpleHeroSec}>
      <Flex flexDir={"column"} h={"fit-content"} my={"auto"}>
        <h1 className={sharedStyles.prodHead}>
          <span>Our Great Product</span> <br /> Solves Your Problems
        </h1>
        <p className={sharedStyles.bodyText}>
          What to do with the product.
          <br /> We think it's cool!
        </p>
        <Button
          className={
            sharedStyles.sectionButton + " " + sharedStyles.sectionButton
          }
        >
          Try The Product!
        </Button>
      </Flex>
      <Box h={"fit-content"} my={"auto"}>
        Cool Image Here
      </Box>
    </Flex>
  );
}
