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
import attributeStyles from "./AttributeGridSec.module.css";
import AttributeGrid from "./AttributeGrid";
export default function AttributeGridSec({}: Props) {
  return (
    <Flex className={sharedStyles.basicSec}>
      <Flex flexDir={"column"}>
        <h4 className={sharedStyles.smallTopText}>Small Top Message</h4>
        <h2 className={sharedStyles.medMidText}>Product Statement</h2>
        <h3 className={sharedStyles.prodBodyText}>
          Describe the above statement. Isn't it great?
        </h3>
        <Button className={sharedStyles.secButton}>Read More</Button>
      </Flex>
      <Flex flexDir={"column"} textAlign={"left"}>
        {" "}
        <h4 className={sharedStyles.smallTopText}>Small Top Message</h4>
        <AttributeGrid />
      </Flex>
    </Flex>
  );
}
