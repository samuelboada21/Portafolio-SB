import {
  Image,
  Text,
  Flex,
  Icon,
  Button,
  useColorMode,
  Box,
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
        <Text fontSize="xl" fontWeight={"semibold"} mx="5">
          About
        </Text>
        <Text fontSize="xl" fontWeight={"semibold"} mx="5">
          Skills
        </Text>
        <Text fontSize="xl" fontWeight={"semibold"} mx="5">
          Projects
        </Text>
        <Text fontSize="xl" fontWeight={"semibold"} ml="5">
          Contact
        </Text>
        <Button onClick={toggleColorMode} mx="5" bg="transparent" _hover="none">
          <Icon
            as={colorMode === "light" ? BsSunFill : IoMdMoon}
            fontSize="x-large"
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
            bg={colorMode === "light" ? "blue.100" : "blue.900"}
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
