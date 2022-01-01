import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerBody,
  Center,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import ContentSkills from "./ContentSkills";
import {
  database,
  frameworks,
  javaScript,
  languages,
  others,
  postgres,
  react,
  sass,
} from "./static";
import Image from "./Image";
import ContentSkillsReverseColumn from "./ContentSkillsReverseColumn";
import HeadingWithDivider from "../others/HeadingWithDivider";
import { drawerStyle } from "../../style/drawer-style";

function SkillsSmallSize({ onClose, isOpen }) {
  const { t } = useTranslation();
  const Title = ({ value }) => {
    return (
      <Heading fontSize="21px" color="blue.500" textAlign="center" mb="1">
        {value}
      </Heading>
    );
  };
  return (
    <Drawer onClose={onClose} isOpen={isOpen} size="full">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody m="0%" p="0%">
            <DrawerHeader>
              <DrawerCloseButton {...drawerStyle} />
            </DrawerHeader>
            <HeadingWithDivider title={t("title-skills")} />
            <Heading
              fontSize="2xl"
              color="black.900"
              mt="5"
              mr="10"
              ml="10"
              textAlign="center"
            >
              {t("skills-description1")}
              <span style={{ color: "#D69E2E" }}> ★</span>,
              {t("skills-description2")}
            </Heading>
            <SimpleGrid column="1" mt="5%" mb="5%" spacing="10px">
              <Center>
                <Image link={javaScript} />
              </Center>
              <Title value={t("languages")} />
              <ContentSkillsReverseColumn data={languages} />
              <Center>
                <Image link={react} />
              </Center>
              <Title value={t("frameworks")} />
              <ContentSkills data={frameworks} />
              <Center>
                <Image link={postgres} />
              </Center>
              <Title value={t("database")} />

              <ContentSkillsReverseColumn data={database} />
              <Center>
                <Image link={sass} />
              </Center>
              <Title value={t("others")} />
              <ContentSkills data={others} />
            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
export default SkillsSmallSize;
