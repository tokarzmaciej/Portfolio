import React, { useState } from "react";
import "bulma/css/bulma.css";
import { useTranslation } from "react-i18next";
import ContentProfile from "./ContentProfile";

function Profile() {
  const [statusModalMe, setStatusModalProfile] = useState("modal");
  const { t } = useTranslation();
  const openModalProfile = () => setStatusModalProfile("modal is-active");
  const closeModalProfile = () => setStatusModalProfile("modal");

  return (
    <>
      <button className="link-menu" onClick={openModalProfile}>
        {t("profile")}
      </button>
      <div className={statusModalMe}>
        <div className="modal-background"></div>
        <div className="modal-card " style={{ width: "940px" }}>
          <header className="modal-card-head">
            <button
              className="delete mb-6"
              aria-label="close"
              onClick={closeModalProfile}
            ></button>
            <p
              className="modal-card-title is-size-1 mt-5"
              style={{ color: "#e1292b", fontVariant: "small-caps" }}
            >
              {t("title-profile")}
            </p>
          </header>
          <section className="modal-card-body pr-6 pl-6">
            <ContentProfile />
          </section>
          <footer className="modal-card-foot is-flex is-justify-content-right">
            <button className="button is-info" onClick={closeModalProfile}>
              {t("exit")}
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Profile;
