import { Box } from "@chakra-ui/react";
function Image({ link }) {
  return (
    <Box
      bg={`url(${link})`}
      bgSize="contain"
      bgPosition="center center"
      bgRepeat="no-repeat"
      width="50px"
      height="50px"
    ></Box>
  );
}

export default Image;
