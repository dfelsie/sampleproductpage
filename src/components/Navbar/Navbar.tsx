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
import navbarStyles from "./Navbar.module.css";
import sharedStyles from "../Shared.module.css";
import useWindowDimensions from "../../useWindowDimensions";
import NavModal from "../Modal/NavModal";
type Props = {};
export default function Navbar({}: Props) {
  const { height, width } = useWindowDimensions();
  const [showNavModal, setShowNavModal] = useState(false);
  console.log(height, " ", width, showNavModal);
  if (width < 768) {
    return (
      <>
        <NavModal showModal={showNavModal} />
        <Flex id={navbarStyles.navDiv}>
          <Box>Logo</Box>
          <Button
            onClick={() => {
              setShowNavModal(!showNavModal);
            }}
          >
            &#9776;
          </Button>
        </Flex>
      </>
    );
  }
  return (
    <Flex id={navbarStyles.navDiv}>
      <Box>Logo</Box>
      <Flex id={navbarStyles.centerLinks}>
        <a className={sharedStyles.purpleHover}>Link 1</a>
        <a className={sharedStyles.purpleHover}>Link 2</a>
        <a className={sharedStyles.purpleHover}>Link 3</a>
      </Flex>
      <Flex id={navbarStyles.navbarButtonGroup}>
        <Button className={navbarStyles.navbarTransparentButton}>
          Button 1
        </Button>
        <Button className={navbarStyles.navbarColoredButton}>Button 2</Button>
      </Flex>
    </Flex>
  );
}
