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
import Image from "next/image";

type Props = {};
export default function SimpleHero({}: Props) {
  return (
    <div id={styles.simpleHeroSec} className={sharedStyles.basicSec}>
      <Flex
        className={sharedStyles.heroText}
        flexDir={"column"}
        h={"fit-content"}
        mx={["auto", "auto", "0", "0"]}
        w={"max-content"}
        textAlign={["center", "center", "inherit", "inherit"]}
      >
        <h1 className={sharedStyles.prodHead}>
          <span>Our Great Product</span> <br /> Solves Your Problems
        </h1>
        <p className={sharedStyles.bodyText}>
          What to do with the product.
          <br /> We think it's cool!
        </p>
        <Button
          m={["auto", "auto", "0", "0"]}
          className={sharedStyles.sectionButton}
          id={styles.heroButton}
        >
          Try The Product!
        </Button>
      </Flex>
      <div id={styles.heroImageCont}>
        <Image src="/assets/images/standsome.jpg" layout={"fill"} />
      </div>
    </div>
  );
}
