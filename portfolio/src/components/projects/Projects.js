import React, { useState } from "react";
import "bulma/css/bulma.css";
import { useTranslation } from "react-i18next";

function Projects() {
  const [statusModalMe, setStatusModalProjects] = useState("modal");
  const { t } = useTranslation();
  const openModalProjects = () => setStatusModalProjects("modal is-active");
  const closeModalProjects = () => setStatusModalProjects("modal");

  return (
    <>
      <button className="link-menu" onClick={openModalProjects}>
        {t("projects")}
      </button>
      <div className={statusModalMe}>
        <div className="modal-background"></div>
        <div className="modal-card " style={{ width: "940px" }}>
          <header className="modal-card-head">
            <button
              className="delete mb-6"
              aria-label="close"
              onClick={closeModalProjects}
            ></button>
            <p
              className="modal-card-title is-size-1 mt-5"
              style={{ color: "#e1292b", fontVariant: "small-caps" }}
            >
              {t("title-projects")}
            </p>
          </header>
          <section className="modal-card-body pr-6 pl-6"></section>
          <footer className="modal-card-foot is-flex is-justify-content-right">
            <button className="button is-info" onClick={closeModalProjects}>
              {t("exit")}
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Projects;
