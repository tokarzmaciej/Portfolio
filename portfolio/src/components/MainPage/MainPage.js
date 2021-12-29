import React from "react";
import BigSizePage from "./BigSizePage";
import SmallSizePage from "./SmallSizePage";
import { useMediaQuery } from "react-responsive";

function MainPage({ changeLanguage }) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1023px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <div>
      {isBigScreen && <BigSizePage changeLanguage={changeLanguage} />}
      {isSmallScreen && <SmallSizePage changeLanguage={changeLanguage} />}
    </div>
  );
}

export default MainPage;
