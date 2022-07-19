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
import footerStyles from "./Footer.module.css";
import sharedStyles from "../Shared.module.css";
import FooterCol from "./FooterCol";
const companyAry = ["About", "Pricing", "Jobs"];
const resourcesAry = ["Docs", "Support", "Security", "Wiki"];
const contactAry = [
  "Github",
  "Twitter",
  "Facebook",
  "Linkedin",
  "Instagram",
  "Blog",
];
const legalAry = ["Privacy Policy", "Terms of Service"];
export default function Footer({}: Props) {
  return (
    <div className={footerStyles.footerSec}>
      <div className={footerStyles.footerMainRow}>
        <FooterCol headerText="Company" textList={companyAry} />
        <FooterCol headerText="Resources" textList={resourcesAry} />
        <FooterCol headerText="Contact" textList={contactAry} />
        <FooterCol headerText="Legal" textList={legalAry} />
      </div>
      <div className={footerStyles.footerCredits}>
        <p className={footerStyles.footerCreditText}>Daniel Felsenthal 2022</p>
      </div>
    </div>
  );
}
