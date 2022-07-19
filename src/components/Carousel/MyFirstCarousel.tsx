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
  Icon,
} from "@chakra-ui/react";
import styles from "./MyFirstCarousel.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

type Props = {};
const nums = [0, 1, 2, 3, 4, 5, 6, 7];

function calculateXTranslateVal(onFirstPage, slideNum) {
  if (onFirstPage) {
    if (slideNum === 4) {
      95;
    }
    return slideNum * 23 + 5;
  } else {
    if (slideNum === 3) {
      return -18;
    }
    return (slideNum - 4) * 23 + 5;
  }
}

export default function MyFirstCarousel({}: Props) {
  const [onFirstPage, setOnFirstPage] = useState(true);
  return (
    <Flex flexDir={"column"} w={"100%"} overflowX={"hidden"}>
      <Box w={"95%"} pos={"relative"} h={"600px"}>
        <Button
          color={"black"}
          className={styles.carouselButton}
          position={"absolute"}
          zIndex={2}
          left={"25px"}
          disabled={onFirstPage}
          onClick={() => {
            setOnFirstPage(true);
          }}
        >
          {"<<"}
        </Button>
        {nums.map((val, i) => (
          <Box
            key={`carouselSlideNum${i}`}
            id={styles[`slideNum${i}`]}
            className={styles.slide}
            style={{
              position: "absolute",
              left: "0",
              transform: `translateX(${calculateXTranslateVal(
                onFirstPage,
                i
              )}vw)`,
            }}
          >
            <Box w={"100%"} h={"80%"} pos={"relative"}>
              <Image
                src="/assets/images/kobu.jpg"
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Flex
              w={"100%"}
              h={"fit-content"}
              my={"auto"}
              justifyContent={"space-between"}
              px={"10px"}
            >
              <Flex flexDir={"column"} h={"100%"}>
                <Heading fontSize={"28px"}>John Doe</Heading>
                <Text fontSize={"16px"}>Job description</Text>
              </Flex>
              <Flex color={"black"} w={"50%"} justifyContent={"space-around"}>
                <FontAwesomeIcon icon={faLinkedin} height={"24px"} />
                <FontAwesomeIcon icon={faTwitter} height={"24px"} />
                <FontAwesomeIcon icon={faEnvelopeSquare} height={"24px"} />
              </Flex>
            </Flex>
          </Box>
        ))}
        <Button
          color={"black"}
          className={styles.carouselButton}
          disabled={!onFirstPage}
          onClick={() => {
            setOnFirstPage(false);
          }}
          style={{ position: "absolute", left: "90%" }}
        >
          {">>"}
        </Button>
      </Box>
    </Flex>
  );
}
