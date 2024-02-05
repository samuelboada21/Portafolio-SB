import { Flex, useColorMode, useMediaQuery } from "@chakra-ui/react";
import NavItems from "../components/NavItems";
import NavItemsW from "../components/NavItemsW";

function NavBar() {
  const [w] = useMediaQuery("(min-width: 786px)");
  const { colorMode } = useColorMode();

  const hexToRGBA = (hex, opacity) => {
    let r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const triclaro =
    colorMode === "light"
      ? `linear-gradient(90deg, ${hexToRGBA("#F6F0F9", 0.8)} 0%, ${hexToRGBA(
          "#FFFFFF",
          0.8
        )} 50%, ${hexToRGBA("#F6F0F9", 0.8)} 100%)`
      : `linear-gradient(90deg, ${hexToRGBA("#23053E", 0.8)} 0%, ${hexToRGBA(
          "#481058",
          0.8
        )} 50%, ${hexToRGBA("#23053E", 0.8)} 100%)`;

  return (
    <Flex
      justify="space-between"
      alignItems="center"
      padding="20px"
      shadow="0px 0px 10px rgba(155,12,159,1)"
      position="fixed"
      width="100%"
      backdropFilter="blur(18px)"
      zIndex="2"
      bg={triclaro}
    >
      {w ? <NavItems /> : <NavItemsW />}
    </Flex>
  );
}

export default NavBar;
