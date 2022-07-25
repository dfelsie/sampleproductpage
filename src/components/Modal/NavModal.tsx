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
  showModal: boolean;
};
import styles from "./NavModal.module.css";
import sharedStyles from "../Shared.module.css";
export default function NavModal({ showModal }: Props) {
  return (
    <div className={styles.modalBg + " " + (showModal ? styles.noDisplay : "")}>
      <div className={styles.modalBody}>
        <ul className={styles.modalList}>
          <h3 className={sharedStyles.purpleHoverText}>Hey!</h3>
          <h3 className={sharedStyles.purpleHoverText}>Hey!</h3>
          <h3 className={sharedStyles.purpleHoverText}>Hey!</h3>
          <h3 className={sharedStyles.purpleHoverText}>Hey!</h3>
          <Button className={styles.modalTransparentButton}>Sign In</Button>
          <Button className={styles.modalColoredButton}>Get Started</Button>
        </ul>
      </div>
    </div>
  );
}
