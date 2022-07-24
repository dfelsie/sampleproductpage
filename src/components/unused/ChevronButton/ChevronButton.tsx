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
  rotatedNum: number;
  setRotatedNum: (rotatedNum: number) => void;
  chevronNum: number;
};
import styles from "./ChevronButton.module.css";
export default function ChevronButton({
  rotatedNum,
  setRotatedNum,
  chevronNum,
}: Props) {
  const isRotated = chevronNum === rotatedNum;
  return (
    <Button
      w={"50px"}
      h={"fit-content"}
      id={styles.roundButton}
      onClick={() => {
        setRotatedNum(chevronNum === rotatedNum ? -1 : chevronNum);
      }}
    >
      <Box
        //Need this or icon disappears on click
        w={"50px"}
        h={"fit-content"}
        id={!isRotated ? styles.chevronSymbol : styles.chevronSymbolRotated}
      >
        {" "}
        &#8964;{" "}
      </Box>
    </Button>
  );
}
