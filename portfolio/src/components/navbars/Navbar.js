import React from "react";
import Hamburger from "./Hamburger";
import { useMediaQuery } from "react-responsive";
import Profile from "../profile/Profile";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Language from "../language/Language";

function Navbar({ changeLanguage }) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1023px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1023px)" });
  return (
    <div className="Navbar">
      {isBigScreen && (
        <nav className="is-size-1">
          <Language changeLanguage={changeLanguage} />
          <ul className="m-0">
            <li>
              <Profile />
            </li>
            <li>
              <Skills />
            </li>
            <li>
              <Projects />
            </li>
            <li>
              <Contact />
            </li>
          </ul>
        </nav>
      )}
      {isSmallScreen && <Hamburger changeLanguage={changeLanguage} />}
    </div>
  );
}

export default Navbar;
