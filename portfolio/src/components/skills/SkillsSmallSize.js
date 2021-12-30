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
                {t("title-skills")}
              </Text>
            </Center>
            <Center>
              <Divider
                opacity="1"
                width="85%"
                border="1px solid black"
              ></Divider>
            </Center>
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
