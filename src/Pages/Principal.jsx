import { Box } from "@chakra-ui/react";
import About from "../components/About";
import NavBar from "../components/NavBar";
import { useColorMode } from "@chakra-ui/react";
import theme from "../utils/Chakra-theme";

function Principal() {
  const { colorMode } = useColorMode();
  const colorS =
    colorMode === "light"
      ? theme.colors.gradient.triclaro
      : theme.colors.gradient.trioscuro;
  return (
    <>
      <Box bg={colorS}>
        <NavBar />
        <About />
      </Box>
    </>
  );
}

export default Principal;
