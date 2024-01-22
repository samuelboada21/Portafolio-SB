import {
  Image,
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
    <Flex
      maxWidth="1280px"
      mx="auto"
      px="5"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image
        src={colorMode === "light" ? "/public/LogoW.png" : "/public/LogoB.png"}
        alt="Logo"
        w="120px"
      />
      <Flex>
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
          href="#contact"
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
          className="pulse"
          bgGradient={theme.colors.gradient.title}
          borderRadius="22px"
          boxShadow="0px 5px 10px rgba(0, 0, 0, 0.3)"
        >
          <Button
            rightIcon={<ImProfile />}
            bg={colorMode === "light" ? "gray.200" : "gray.800"}
            borderRadius="20px"
            m="2px"
            _hover={{ background: "transparent", color: "white" }}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1OZ3ChgKjueET5J4myxM81r6XXGZ6nVTd/view?usp=drive_link",
                "_blank"
              )
            }
          >
            RESUME
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default NavItems;
