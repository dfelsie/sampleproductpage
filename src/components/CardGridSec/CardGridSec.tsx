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
import cardGridStyles from "./CardGrid.module.css";
import CardGrid from "./CardGrid";
export default function CardGridSec({}: Props) {
  return (
    <Flex className={sharedStyles.basicSec + " " + cardGridStyles.cardGridSec}>
      <div className={sharedStyles.prodTextCol}>
        <h4
          className={
            sharedStyles.smallTopText + " " + cardGridStyles.smallTopText
          }
        >
          Small Top Message
        </h4>
        <h2 className={sharedStyles.medMidText}>Product Statement</h2>
        <h3 className={sharedStyles.prodBodyText}>
          Describe the above statement. We really love our product. We think you
          will too.
        </h3>
        <Button
          className={sharedStyles.secButton}
          id={cardGridStyles.cardGridButton}
        >
          Read More
        </Button>
      </div>
      <CardGrid />
    </Flex>
  );
}
