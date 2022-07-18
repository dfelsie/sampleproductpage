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
export default function ClickableLinkSec({}: Props) {
  return (
    <Flex flexDir={"column"} className={sharedStyles.basicSec}>
      <h4 className={sharedStyles.smallTopText}>Small Top Message</h4>
      <LinkGrid />
    </Flex>
  );
}
