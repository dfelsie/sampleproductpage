import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Flex,
  Box,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import Navbar from "../components/Navbar/Navbar";
import SimpleHero from "../components/SimpleHero/SimpleHero";
import CardGridSec from "../components/CardGridSec/CardGridSec";
import AttributeGridSec from "../components/AttributeGridSec/AttributeGridSec";
import ClickableLinkSec from "../components/ClickableLinkSec/ClickableLinkSec";
import SponsorRowSec from "../components/SponsorRowSec/SponsorRowSec";
import Footer from "../components/Footer/Footer";
import NavModal from "../components/Modal/NavModal";
import useWindowDimensions from "../useWindowDimensions";
const Index = () => (
  <Flex
    minH={"100vh"}
    flexDir={"column"}
    position={"relative"}
    w={"100%"}
    overflowX={"hidden"}
  >
    <Navbar />
    <SimpleHero />
    <CardGridSec />
    <AttributeGridSec />
    <ClickableLinkSec />
    <Footer></Footer>
  </Flex>
);

export default Index;
