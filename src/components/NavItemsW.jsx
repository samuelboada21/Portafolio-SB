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
  useColorMode,
  useDisclosure,
  useMediaQuery,
  Link,
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
          <Icon as={FaBars} fontSize="20px"></Icon>
        </Button>
      </Flex>

      <Drawer
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
        size={w ? "xs" : "full"}
      >
        <DrawerOverlay />
        <DrawerContent bg={colorMode === "light" ? "#F6F0F9" : "#23053E"}>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex direction={"column"} alignItems={"center"} mt="25px">
              <Link href="#about" style={{ textDecoration: "none" }} w={"100%"}>
                <Button
                  fontSize="xl"
                  fontWeight={"semibold"}
                  my="2"
                  w={"100%"}
                  bg={"transparent"}
                >
                  About
                </Button>
              </Link>
              <Link
                href="#skills"
                style={{ textDecoration: "none" }}
                w={"100%"}
              >
                <Button
                  fontSize="xl"
                  fontWeight={"semibold"}
                  my="2"
                  w={"100%"}
                  bg={"transparent"}
                >
                  Skills
                </Button>
              </Link>
              <Link
                href="#projects"
                style={{ textDecoration: "none" }}
                w={"100%"}
              >
                <Button
                  fontSize="xl"
                  fontWeight={"semibold"}
                  my="2"
                  w={"100%"}
                  bg={"transparent"}
                >
                  Projects
                </Button>
              </Link>
              <Link
                href="#contact"
                style={{ textDecoration: "none" }}
                w={"100%"}
              >
                <Button
                  fontSize="xl"
                  fontWeight={"semibold"}
                  my="2"
                  w={"100%"}
                  bg={"transparent"}
                >
                  Contact
                </Button>
              </Link>
              <Box
                bgGradient={theme.colors.gradient.title}
                borderRadius="22px"
                boxShadow="0px 5px 10px rgba(0, 0, 0, 0.3)"
                my="3"
              >
                <Button
                  rightIcon={<ImProfile />}
                  bg={colorMode === "light" ? "gray.200" : "gray.800"}
                  borderRadius="20px"
                  m="2px"
                  _hover={{ background: "transparent", color: "white" }}
                >
                  RESUME
                </Button>
              </Box>
              <Button
                onClick={toggleColorMode}
                my="3"
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
