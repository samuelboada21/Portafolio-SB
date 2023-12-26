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

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorS =
    colorMode === "light"
      ? theme.colors.gradient.triclaro
      : theme.colors.gradient.trioscuro;

  return (
    <Flex
      justify="space-between"
      alignItems="center"
      bg={colorS}
      padding="20px"
    >
      <div>
        <Image
          src={colorMode==="light" ? "/public/LogoW.png" : "/public/LogoB.png"}
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
        <Button onClick={toggleColorMode} mx="5" bg="transparent" >
          <Icon
            as={colorMode === "light" ? BsSunFill : IoMdMoon}
            fontSize="x-large"
          />
        </Button>
        <Box bgGradient={theme.colors.gradient.button} borderRadius="22px">
          <Button bg={colorMode==="light"?"gray.100":"gray.700"} borderRadius="20px" m="2px"
            _hover={{background: "transparent"}}
          >
            <Text fontSize="xl" fontWeight="semibold" mx="5">
              CV <Icon as={ImProfile} fontSize="medium" ml="1" />
            </Text>
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default NavBar;
