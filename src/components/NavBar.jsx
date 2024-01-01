import { Flex, useMediaQuery } from "@chakra-ui/react";
import NavItems from "../components/NavItems";
import NavItemsW from "../components/NavItemsW";

function NavBar() {
  const [w] = useMediaQuery("(min-width: 786px)");

  return (
    <Flex justify="space-between" alignItems="center" padding="20px" shadow="md">
      {w ? <NavItems /> : <NavItemsW />}
    </Flex>
  );
}

export default NavBar;
