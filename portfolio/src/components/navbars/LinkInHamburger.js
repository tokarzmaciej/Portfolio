import { Grid, Box, Text, Flex, Icon, useDisclosure } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

function LinkInHamburger({ fieldMenu, component }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    onOpen();
  };
  return (
    <>
      {component(isOpen, onClose)}
      <button onClick={() => handleClick()}>
        <Box w="90vw" h="20" bg="white">
          <Grid templateColumns="repeat(2, 1fr)" mt="5%">
            <Flex>
              <Text h="20" fontSize="300%" color="#030303">
                {fieldMenu}
              </Text>
            </Flex>
            <Flex justify="right" align="center">
              <Icon as={ArrowRightIcon} w="40" h="50" color="#030303" />
            </Flex>
          </Grid>
        </Box>
      </button>
    </>
  );
}

export default LinkInHamburger;
