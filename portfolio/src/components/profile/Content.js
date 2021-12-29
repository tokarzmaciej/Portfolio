import { Text, Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import photo from "../../style/photo.png";
function Content() {
  const { t } = useTranslation();
  function Feature({ title, text }) {
    return (
      <Box px="10" py="4" mt="0">
        <Flex justify="start">
          <Heading fontSize="2xl" color="blue.500">
            {title}
          </Heading>
        </Flex>
        {text}
      </Box>
    );
  }
  return (
    <>
      <Flex justify="center">
        <Box
          bg={"url(" + photo + ")"}
          width="230px"
          height="290px"
          bgRepeat="no-repeat"
          bgSize="contain"
          bgPosition="center center"
          mt="10"
        ></Box>
      </Flex>

      <Feature
        title={t("title-summary")}
        text={
          <Text fontSize="xl" align="left" mt="4" ml="3">
            <Trans>{t("content-summary")}</Trans>
          </Text>
        }
      ></Feature>
      <Feature
        title={t("title-studies")}
        text={
          <Text fontSize="xl" align="left" mt="4" ml="3">
            <Trans>{t("content-studies")}</Trans>
          </Text>
        }
      ></Feature>
      <Feature
        title={t("title-character")}
        text={
          <Text fontSize="xl" align="left" mt="4" ml="3">
            <Trans>{t("content-character")}</Trans>
          </Text>
        }
      ></Feature>
      <Feature
        title={t("title-hobby")}
        text={
          <Text fontSize="xl" align="left" mt="4" ml="3">
            <Trans>{t("content-hobby")}</Trans>
          </Text>
        }
      ></Feature>
    </>
  );
}
export default Content;
