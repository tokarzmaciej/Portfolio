import React, { useState } from "react";
import "bulma/css/bulma.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const [statusModalMe, setStatusModalContact] = useState("modal");
  const { t } = useTranslation();
  const openModalContact = () => setStatusModalContact("modal is-active");
  const closeModalContact = () => setStatusModalContact("modal");

  return (
    <>
      <button className="link-menu" onClick={openModalContact}>
        {t("contact")}
      </button>
      <div className={statusModalMe}>
        <div className="modal-background"></div>
        <div className="modal-card " style={{ width: "940px" }}>
          <header className="modal-card-head">
            <button
              className="delete mb-6"
              aria-label="close"
              onClick={closeModalContact}
            ></button>
            <p
              className="modal-card-title is-size-2 mt-5"
              style={{ color: "#e1292b" }}
            >
              {t("contact")}
            </p>
          </header>
          <section className="modal-card-body pr-6 pl-6"></section>
          <footer className="modal-card-foot is-flex is-justify-content-right">
            <button className="button is-info" onClick={closeModalContact}>
              {t("exit")}
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Contact;
