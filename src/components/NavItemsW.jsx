import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Image,
  Text,
  useColorMode,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa6";
import React from "react";
import theme from "../utils/Chakra-theme";
import { BsSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";
import { ImProfile } from "react-icons/im";

function NavItemsW() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = React.useState("right");
  const { colorMode, toggleColorMode } = useColorMode();
  const [w] = useMediaQuery("(min-width: 480px)");

  return (
    <>
      <div>
        <Image
          src={
            colorMode === "light" ? "/public/LogoW.png" : "/public/LogoB.png"
          }
          alt="Logo"
          w="120px"
          borderRadius="20px"
        />
      </div>
      <Flex justifyContent={"flex-end"} width="100%">
        <Button bg="transparent" onClick={onOpen}>
          <Icon as={FaBars}></Icon>
        </Button>
      </Flex>

      <Drawer
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
        size={w ? "xs" : "full"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex direction={"column"} alignItems={"center"}>
              <Text fontSize="xl" fontWeight={"semibold"} my="2">
                About
              </Text>
              <Text fontSize="xl" fontWeight={"semibold"} my="2">
                Skills
              </Text>
              <Text fontSize="xl" fontWeight={"semibold"} my="2">
                Projects
              </Text>
              <Text fontSize="xl" fontWeight={"semibold"} my="2">
                Contact
              </Text>
              <Box
                bgGradient={theme.colors.gradient.button}
                borderRadius="22px"
                boxShadow={
                  colorMode === "light"
                    ? "0 0 12px rgba(0, 0, 0, 0.5)"
                    : "0 0px 12px rgba(255, 255, 255, 0.5)"
                }
                my="2"
              >
                <Button
                  bg={colorMode === "light" ? "gray.100" : "gray.700"}
                  borderRadius="20px"
                  m="2px"
                  _hover={{ background: "transparent" }}
                >
                  <Text fontSize="xl" fontWeight="semibold" mx="5">
                    CV <Icon as={ImProfile} fontSize="medium" ml="1" />
                  </Text>
                </Button>
              </Box>
              <Button
                onClick={toggleColorMode}
                my="2"
                bg="transparent"
                _hover="none"
              >
                <Icon
                  as={colorMode === "light" ? BsSunFill : IoMdMoon}
                  fontSize="35px"
                />
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavItemsW;
