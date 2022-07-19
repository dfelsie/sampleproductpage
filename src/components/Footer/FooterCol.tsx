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

import footerStyles from "./Footer.module.css";
import sharedStyles from "../Shared.module.css";

type Props = {
  headerText: string;
  textList: string[];
};
export default function FooterCol({ headerText, textList }: Props) {
  return (
    <Flex flexDir={"column"}>
      <h4 className={sharedStyles.smallTopText}>{headerText}</h4>

      <List>
        {textList.map((val, i) => (
          <ListItem key={`LinkText${val}number${i}`}>
            <a
              className={sharedStyles.purpleHover + " " + footerStyles.colItem}
            >
              {val}
            </a>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
}
