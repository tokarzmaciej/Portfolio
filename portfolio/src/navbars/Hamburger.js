import {
  Drawer,
  Grid,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Static } from "../constants/Menu";
import LinkInHamburger from "./LinkInHamburger";

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
          <i className="fas fa-bars"></i>
        </div>

        <Drawer onClose={onClose} isOpen={isOpen} size={size}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader bg="#030303" mb="1%">
              <DrawerCloseButton
                color="white"
                fontSize="1xl"
                _focus={{ borderColor: "#030303" }}
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
            <DrawerFooter>
              <Grid templateRows="repeat(4, 1fr)" mr="-15%" gap="20">
                {Static.map((field, key) => (
                  <LinkInHamburger key={key} fieldMenu={field} />
                ))}
              </Grid>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </nav>
  );
}

export default Hamburger;
