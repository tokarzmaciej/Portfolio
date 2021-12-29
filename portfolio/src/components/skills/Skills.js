import React, { useState } from "react";
import "bulma/css/bulma.css";
import { useTranslation } from "react-i18next";

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
              style={{ color: "#e1292b" }}
            >
              {t("title-skills")}
            </p>
          </header>
          <section className="modal-card-body pr-6 pl-6"></section>
          <footer className="modal-card-foot is-flex is-justify-content-right">
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
