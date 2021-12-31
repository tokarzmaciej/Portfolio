import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerBody,
  Text,
  Center,
  Divider,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

import ContentProjects from "./ContentProjects";

function ProjectsSmallSize({ onClose, isOpen }) {
  const { t } = useTranslation();
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="full">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody m="0%" p="0%">
            <DrawerHeader>
              <DrawerCloseButton
                color="#030303"
                fontSize="1xl"
                _focus={{ borderColor: "#030303" }}
                position="relative"
                left="96%"
                top="5%"
                bg="white"
                _hover={{
                  bg: "white",
                  color: "#030303",
                }}
                _active={{
                  bg: "white",
                  color: "#030303",
                }}
              />
            </DrawerHeader>
            <Center>
              <Text
                color="#e1292b"
                fontSize="40px"
                style={{ fontVariant: "small-caps" }}
              >
                {t("title-projects")}
              </Text>
            </Center>
            <Center>
              <Divider
                opacity="1"
                width="85%"
                border="1px solid black"
              ></Divider>
            </Center>
            <Box my="10%">
              <ContentProjects />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
export default ProjectsSmallSize;
