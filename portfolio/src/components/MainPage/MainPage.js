import React, { Fragment } from "react";
import Media from "react-media";
import BigSizePage from "./BigSizePage";
import SmallSizePage from "./SmallSizePage";

function MainPage() {
  return (
    <Media
      queries={{
        large: "(min-width: 1023px)",
        other: "(max-width:1023px)",
      }}
    >
      {(matches) => (
        <Fragment>
          {matches.large && <BigSizePage />}
          {matches.other && <SmallSizePage />}
        </Fragment>
      )}
    </Media>
  );
}

export default MainPage;
