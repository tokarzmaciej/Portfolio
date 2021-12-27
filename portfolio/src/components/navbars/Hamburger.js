import {
  Grid,
  Icon,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerBody,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

// import {
//   Button,
//   Drawer,
//   DrawerCloseButton,
//   DrawerContent,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerFooter,
//   Text,
//   useDisclosure,
// } from "@chakra-ui/core";

import React from "react";
import { Static } from "../../constants/Menu";
import LinkInHamburger from "./LinkInHamburger";
import { HamburgerIcon } from "@chakra-ui/icons";

function Hamburger() {
  const size = "full";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    onOpen();
  };
  return (
    <nav className="is-size-1">
      <>
        <div onClick={() => handleClick()} key={size} m={4}>
          <Button
            width="60px"
            height="70px"
            variant="link"
            _focus={{ borderColor: "#e1292b" }}
            color="#e1292b"
          >
            <Icon
              as={HamburgerIcon}
              width="90%"
              height="75%"
              stroke="#e1292b"
              strokeWidth="0.5"
            ></Icon>
          </Button>
        </div>
        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerBody m="0%" p="0%">
                <DrawerHeader bg="#030303">
                  <DrawerCloseButton
                    color="white"
                    fontSize="1xl"
                    _focus={{ borderColor: "#030303" }}
                    position="relative"
                    left="96%"
                    top="5%"
                  />
                  <Text
                    fontFamily="Segoe Script"
                    color="white"
                    fontSize="7xl"
                    align="center"
                    mt="5%"
                  >
                    Maciej
                  </Text>
                  <Text
                    fontFamily="Segoe Script"
                    color="white"
                    fontSize="7xl"
                    align="center"
                    mb="5%"
                  >
                    Tokarz
                  </Text>
                </DrawerHeader>
                <Grid
                  templateRows="repeat(4, 1fr)"
                  ml="12%"
                  gap="1%"
                  mb="10%"
                  mt="10%"
                  height="auto"
                >
                  {Static.map((field, key) => (
                    <LinkInHamburger key={key} fieldMenu={field} />
                  ))}
                </Grid>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    </nav>
  );
}

export default Hamburger;
