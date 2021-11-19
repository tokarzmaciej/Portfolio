import { Link } from "react-router-dom";
import React from "react";
import Hamburger from "./Hamburger";
import { Static } from "../../constants/Menu";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1023px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1023px)" });
  return (
    <div className="Navbar">
      {isBigScreen && (
        <nav className="is-size-1">
          <ul>
            {Static.map((field, key) => (
              <li key={key}>
                <Link to={`/${field}`}>{field}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      {isSmallScreen && <Hamburger />}
    </div>
  );
}

export default Navbar;
