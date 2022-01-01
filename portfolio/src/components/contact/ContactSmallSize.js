import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerBody,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import ContentContact from "./ContentContact";
import "bulma/css/bulma.css";
import HeadingWithDivider from "../others/HeadingWithDivider";
import { drawerStyle } from "../../style/drawer-style";

function ContactSmallSize({ onClose, isOpen }) {
  const { t } = useTranslation();
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="full">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody m="0%" p="0%">
            <DrawerHeader>
              <DrawerCloseButton {...drawerStyle} />
            </DrawerHeader>
            <HeadingWithDivider title={t("contact")} />
            <Flex align="center" justify="center" mt="10%">
              <ContentContact />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
export default ContactSmallSize;
