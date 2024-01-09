import { Flex, useMediaQuery } from "@chakra-ui/react";
import NavItems from "../components/NavItems";
import NavItemsW from "../components/NavItemsW";

function NavBar() {
  const [w] = useMediaQuery("(min-width: 786px)");

  return (
    <Flex justify="space-between" alignItems="center" padding="20px" shadow="md" position="fixed" width="100%" backdropFilter="blur(10px)" zIndex="2">
      {w ? <NavItems /> : <NavItemsW />}
    </Flex>
  );
}

export default NavBar;
