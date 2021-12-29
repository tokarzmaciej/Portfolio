import {
  Grid,
  Icon,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerBody,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import LinkInHamburger from "./LinkInHamburger";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import ProfileSmallSize from "../profile/ProfileSmallSize";
import Language from "../language/Language";

function Hamburger({ changeLanguage }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    onOpen();
  };
  const { t } = useTranslation();
  return (
    <nav className="is-size-1">
      <>
        <Language changeLanguage={changeLanguage} />
        <div onClick={() => handleClick()} key="full" mb="10">
          <Button
            width="60px"
            height="70px"
            variant="link"
            _focus={{ borderColor: "#e1292b" }}
            color="#e1292b"
          >
            <Icon
              as={HamburgerIcon}
              width="90%"
              height="75%"
              stroke="#e1292b"
              strokeWidth="0.5"
            ></Icon>
          </Button>
        </div>
        <Drawer onClose={onClose} isOpen={isOpen} size="full">
          <DrawerOverlay>
            <DrawerContent>
              <DrawerBody m="0%" p="0%">
                <DrawerHeader bg="#030303">
                  <DrawerCloseButton
                    color="white"
                    fontSize="1xl"
                    _focus={{ borderColor: "#030303" }}
                    position="relative"
                    left="96%"
                    top="5%"
                  />
                  <Text
                    fontFamily="Segoe Script"
                    color="white"
                    fontSize="7xl"
                    align="center"
                    mt="5%"
                  >
                    Maciej
                  </Text>
                  <Text
                    fontFamily="Segoe Script"
                    color="white"
                    fontSize="7xl"
                    align="center"
                    mb="5%"
                  >
                    Tokarz
                  </Text>
                </DrawerHeader>
                <Grid
                  templateRows="repeat(4, 1fr)"
                  ml="12%"
                  gap="1%"
                  mb="10%"
                  mt="10%"
                  height="auto"
                >
                  <LinkInHamburger
                    fieldMenu={t("profile")}
                    component={(isOpen, onClose) => (
                      <ProfileSmallSize isOpen={isOpen} onClose={onClose} />
                    )}
                  />
                  <LinkInHamburger
                    fieldMenu={t("skills")}
                    component={(isOpen, onClose) => (
                      <ProfileSmallSize isOpen={isOpen} onClose={onClose} />
                    )}
                  />
                  <LinkInHamburger
                    fieldMenu={t("projects")}
                    component={(isOpen, onClose) => (
                      <ProfileSmallSize isOpen={isOpen} onClose={onClose} />
                    )}
                  />
                  <LinkInHamburger
                    fieldMenu={t("contact")}
                    component={(isOpen, onClose) => (
                      <ProfileSmallSize isOpen={isOpen} onClose={onClose} />
                    )}
                  />
                </Grid>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    </nav>
  );
}

export default Hamburger;
