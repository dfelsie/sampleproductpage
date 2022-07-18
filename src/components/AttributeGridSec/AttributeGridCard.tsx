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
import attrGridStyles from "./AttributeGrid.module.css";
export default function AttibuteGridCard({ cardText }: Props) {
  return (
    <Box className={attrGridStyles.attributeCard}>
      <p className={attrGridStyles.attributeCardHeader}>{cardText}</p>
      <p className={attrGridStyles.attributeCardBody}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </Box>
  );
}
