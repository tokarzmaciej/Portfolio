import Navbar from "../navbars/Navbar";
import "bulma/css/bulma.css";
import { Box } from "@chakra-ui/react";
import { smallBackgroundLink } from "./static";

function SmallSizePage({ changeLanguage }) {
  return (
    <Box
      bg={`url(${smallBackgroundLink})`}
      bgSize="contain"
      bgPosition="center center"
      bgRepeat="no-repeat"
      bgAttachment="fixed"
      backgroundColor="#030303"
      width="100vw"
      height="100vh"
    >
      <Navbar changeLanguage={changeLanguage} />
    </Box>
  );
}

export default SmallSizePage;
