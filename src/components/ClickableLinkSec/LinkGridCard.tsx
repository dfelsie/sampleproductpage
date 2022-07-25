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
import Image from "next/image";

type Props = {
  linkHeadText: string;
};
import sharedStyles from "../Shared.module.css";
import linkGridStyles from "./LinkGrid.module.css";
export default function LinkGridCard({ linkHeadText }: Props) {
  return (
    <div className={linkGridStyles.linkGridCard}>
      <div
        className={
          sharedStyles.nextImageContainer + " " + linkGridStyles.gridCardImgCont
        }
      >
        <Image
          className={sharedStyles.nextImage + " " + linkGridStyles.gridCardImg}
          layout={"fill"}
          src="/assets/images/kobu.jpg"
        />
      </div>
      <div className={linkGridStyles.linkGridCardTextCol}>
        <h4>{linkHeadText}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nostrum
          deserunt, expedita veritatis neque sint voluptate!{" "}
        </p>
      </div>
      <div className={linkGridStyles.gridCardArrow}>&#8594;</div>
    </div>
  );
}
