import { Text, Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { myPhoto } from "./static";
function ContentProfile() {
  const { t } = useTranslation();
  function Feature({ title, text }) {
    return (
      <Box px="10" py="4" mt="0">
        <Flex justify="start">
          <Heading fontSize="2xl" color="blue.500">
            {title}
          </Heading>
        </Flex>
        <Text fontSize="xl" align="left" mt="1" ml="3" mb="3">
          <Trans>{text}</Trans>
        </Text>
      </Box>
    );
  }
  return (
    <>
      <Flex justify="center">
        <Box
          bg={`url(${myPhoto})`}
          width="230px"
          height="290px"
          bgRepeat="no-repeat"
          bgSize="contain"
          bgPosition="center center"
          mt="10"
        ></Box>
      </Flex>

      <Feature title={t("title-summary")} text={t("content-summary")}></Feature>
      <Feature title={t("title-studies")} text={t("content-studies")}></Feature>
      <Feature
        title={t("title-character")}
        text={t("content-character")}
      ></Feature>
      <Feature title={t("title-hobby")} text={t("content-hobby")}></Feature>
    </>
  );
}
export default ContentProfile;
