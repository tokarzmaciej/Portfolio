import React, { useState } from "react";
import "bulma/css/bulma.css";
import { useTranslation } from "react-i18next";
import { Heading, HStack, WrapItem, Center } from "@chakra-ui/react";
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
import ContentSkills from "./ContentSkills";
import ContentSkillsReverseColumn from "./ContentSkillsReverseColumn";
import Image from "./Image";

function Skills() {
  const [statusModalMe, setStatusModalSkills] = useState("modal");
  const { t } = useTranslation();
  const openModalSkills = () => setStatusModalSkills("modal is-active");
  const closeModalSkills = () => setStatusModalSkills("modal");

  return (
    <>
      <button className="link-menu" onClick={openModalSkills}>
        {t("skills")}
      </button>
      <div className={statusModalMe}>
        <div className="modal-background"></div>
        <div className="modal-card " style={{ width: "940px" }}>
          <header className="modal-card-head">
            <button
              className="delete mb-6"
              aria-label="close"
              onClick={closeModalSkills}
            ></button>
            <p
              className="modal-card-title is-size-2 mt-5"
              style={{ color: "#e1292b", fontVariant: "small-caps" }}
            >
              {t("title-skills")}
            </p>
          </header>
          <section className="modal-card-body pr-6 pl-6">
            <Heading fontSize="21px" mt="-4px" color="blue.500">
              {t("languages")}
            </Heading>
            <ContentSkillsReverseColumn data={languages} />
            <HStack mr="0%" ml="6%" mt="2%">
              <WrapItem m="0" p="0">
                <Heading fontSize="21px" ml="65px" color="blue.500">
                  {t("frameworks")}
                </Heading>
                <ContentSkills data={frameworks} />
              </WrapItem>
              <WrapItem m="0" p="0" pl="40px">
                <Center>
                  <Image link={javaScript} />
                </Center>
                <HStack columns={2} row={1} spacing="100px">
                  <Image link={react} />
                  <Image link={postgres} />
                </HStack>
                <Center>
                  <Image link={sass} />
                </Center>
              </WrapItem>
              <WrapItem>
                <Heading fontSize="21px" color="blue.500" textAlign="center">
                  {t("database")}
                </Heading>
                <ContentSkillsReverseColumn data={database} />
              </WrapItem>
            </HStack>

            <Heading fontSize="21px" mt="1%" color="blue.500">
              {t("others")}
            </Heading>
            <ContentSkillsReverseColumn data={others} />
            <Heading fontSize="2xl" color="black.900" mt="5">
              {t("skills-description1")}
              <span style={{ color: "#D69E2E" }}> ★</span>,
              {t("skills-description2")}
            </Heading>
          </section>
          <footer className="modal-card-foot is-flex is-justify-content-right ">
            <button className="button is-info" onClick={closeModalSkills}>
              {t("exit")}
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Skills;
