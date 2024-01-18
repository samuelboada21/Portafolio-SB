import { Box } from "@chakra-ui/react";
import About from "../components/About";
import NavBar from "../components/NavBar";
import { useColorMode } from "@chakra-ui/react";
import theme from "../utils/Chakra-theme";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Box>
    </>
  );
}

export default Principal;
