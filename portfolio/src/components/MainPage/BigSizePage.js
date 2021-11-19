import Navbar from "../navbars/Navbar";
import "bulma/css/bulma.css";
import { Box } from "@chakra-ui/react";

function BigSizePage() {
  return (
    <Box
      bg="url('https://github.com/tokarzmaciej/Portfolio/blob/main/portfolio/src/style/background_1024px_up.png?raw=true')"
      bgSize="contain"
      bgPosition="center center"
      bgRepeat="no-repeat"
      bgAttachment="fixed"
      bgColor="#030303"
      width="100vw"
      height="100vh"
    >
      <Navbar />
    </Box>
  );
}

export default BigSizePage;