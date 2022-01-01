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
import SkillsSmallSize from "../skills/SkillsSmallSize";
import ProjectsSmallSize from "../projects/ProjectsSmallSize";
import ContactSmallSize from "../contact/ContactSmallSize";

function Hamburger({ changeLanguage }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    onOpen();
  };
  const { t } = useTranslation();
  const textStyle = {
    color: "white",
    fontSize: "7xl",
    align: "center",
    style: { fontFamily: "Segoe Script" },
  };
  const profile = (isOpen, onClose) => (
    <ProfileSmallSize isOpen={isOpen} onClose={onClose} />
  );
  const skills = (isOpen, onClose) => (
    <SkillsSmallSize isOpen={isOpen} onClose={onClose} />
  );
  const projects = (isOpen, onClose) => (
    <ProjectsSmallSize isOpen={isOpen} onClose={onClose} />
  );
  const contact = (isOpen, onClose) => (
    <ContactSmallSize isOpen={isOpen} onClose={onClose} />
  );
  const skillsValue = t("skills").substring(0, 7).endsWith("t")
    ? t("skills").substring(0, 7) + "..."
    : t("skills");
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
                  <Text {...textStyle} mt="5%">
                    Maciej
                  </Text>
                  <Text {...textStyle} mb="5%">
                    Tokarz
                  </Text>
                </DrawerHeader>
                <Grid
                  templateRows="repeat(4, 1fr)"
                  ml="10%"
                  gap="1%"
                  my="10%"
                  height="auto"
                >
                  <LinkInHamburger
                    fieldMenu={t("profile")}
                    component={profile}
                  />
                  <LinkInHamburger fieldMenu={skillsValue} component={skills} />
                  <LinkInHamburger
                    fieldMenu={t("projects")}
                    component={projects}
                  />
                  <LinkInHamburger
                    fieldMenu={t("contact")}
                    component={contact}
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
