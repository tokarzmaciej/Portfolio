import { Link } from "react-router-dom";
import React, { Fragment } from "react";
import Media from "react-media";
import "bulma/css/bulma.css";
import Hamburger from "./Hamburger";
import { Static } from "../constants/Menu";

function Navbar() {
  return (
    <div className="Navbar">
      <Media
        queries={{
          large: "(min-width: 1023px)",
          other: "(max-width:1023px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.large && (
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
            {matches.other && <Hamburger />}
          </Fragment>
        )}
      </Media>
    </div>
  );
}

export default Navbar;
