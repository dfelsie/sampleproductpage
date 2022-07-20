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
import LinkGrid from "./LinkGrid";
import linkGridStyles from "./LinkGrid.module.css";
export default function ClickableLinkSec({}: Props) {
  return (
    <Box className={sharedStyles.basicSec} id={linkGridStyles.linkGridSec}>
      <Flex flexDir={"column"}>
        <h4
          className={
            sharedStyles.smallTopText + " " + linkGridStyles.smallTopText
          }
        >
          Small Top Message
        </h4>
        <LinkGrid />
      </Flex>
    </Box>
  );
}
