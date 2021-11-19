import { Grid, Box, Text, Flex, Icon } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

function LinkInHamburger({ fieldMenu }) {
  return (
    <Link to="/">
      <Box w="100vw" h="20" bg="white">
        <Grid templateColumns="repeat(2, 1fr)">
          <Flex justify="center" align="center">
            <Text w="50vw" h="20" fontSize="300%" color="#030303">
              {fieldMenu}
            </Text>
          </Flex>
          <Flex justify="center" align="center">
            <Icon as={ArrowRightIcon} w={40} h={50} color="#030303" />
          </Flex>
        </Grid>
      </Box>
    </Link>
  );
}

export default LinkInHamburger;
