import {
  Image,
  Text,
  Flex,
  Icon,
  Button,
  useColorMode,
  Box,
  Link,
} from "@chakra-ui/react";
import theme from "../utils/Chakra-theme";
import { BsSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";
import { ImProfile } from "react-icons/im";

function NavItems() {
  const { colorMode, toggleColorMode } = useColorMode();

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
      <Flex alignItems={"center"}>
        <Link
          href="#about"
          style={{ textDecoration: "none" }}
          fontSize="xl"
          fontWeight={"semibold"}
          mx="5"
        >
          About
        </Link>
        <Link
          href="#skills"
          style={{ textDecoration: "none" }}
          fontSize="xl"
          fontWeight={"semibold"}
          mx="5"
        >
          Skills
        </Link>
        <Link
          href="#projects"
          style={{ textDecoration: "none" }}
          fontSize="xl"
          fontWeight={"semibold"}
          mx="5"
        >
          Projects
        </Link>
        <Link
          href="#skills"
          style={{ textDecoration: "none" }}
          fontSize="xl"
          fontWeight={"semibold"}
          ml="5"
        >
          Contact
        </Link>
        <Button onClick={toggleColorMode} mx="5" bg="transparent" _hover="none">
          <Icon
            as={colorMode === "light" ? BsSunFill : IoMdMoon}
            fontSize="28px"
          />
        </Button>
        <Box
          bgGradient={theme.colors.gradient.button}
          borderRadius="22px"
          boxShadow={
            colorMode === "light"
              ? "0 0 12px rgba(0, 0, 0, 0.5)"
              : "0 0px 12px rgba(255, 255, 255, 0.5)"
          }
        >
          <Button
            bg={colorMode === "light" ? "gray.200" : "gray.800"}
            borderRadius="20px"
            m="2px"
            _hover={{ background: "transparent" }}
          >
            <Text fontSize="xl" fontWeight="semibold" mx="5">
              CV <Icon as={ImProfile} fontSize="medium" ml="1" />
            </Text>
          </Button>
        </Box>
      </Flex>
    </>
  );
}

export default NavItems;
