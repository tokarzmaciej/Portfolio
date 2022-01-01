import Navbar from "../navbars/Navbar";
import "bulma/css/bulma.css";
import { Box } from "@chakra-ui/react";
import { bigBackgroundLink } from "./static";

function BigSizePage({ changeLanguage }) {
  return (
    <Box
      bg={`url(${bigBackgroundLink})`}
      bgSize="contain"
      bgPosition="center center"
      bgRepeat="no-repeat"
      bgAttachment="fixed"
      bgColor="#030303"
      minWidth="100vw"
      minHeight="100vh"
    >
      <Navbar changeLanguage={changeLanguage} />
    </Box>
  );
}

export default BigSizePage;
