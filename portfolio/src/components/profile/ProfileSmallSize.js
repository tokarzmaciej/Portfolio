import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerBody,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { drawerStyle } from "../../style/drawer-style";
import HeadingWithDivider from "../others/HeadingWithDivider";
import Content from "./ContentProfile";

function ProfileSmallSize({ onClose, isOpen }) {
  const { t } = useTranslation();

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="full">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody m="0%" p="0%">
            <DrawerHeader>
              <DrawerCloseButton {...drawerStyle} />
            </DrawerHeader>
            <HeadingWithDivider title={t("title-profile")} />
            <Content />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
export default ProfileSmallSize;
