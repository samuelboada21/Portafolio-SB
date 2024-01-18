import { Box, Flex, Link, Stack, Button, Text } from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import theme from "../utils/Chakra-theme";

function Footer() {
  const buttonStyle = {
    borderRadius: "10px",
    bg: "transparent",
    w: "120px",
    borderColor: "white",
    borderWidth: "1px",
    color: "white",
    _hover: {
      bg: "white",
      color: "black",
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <Box bg={theme.colors.gradient.footer} mt={"100px"} px="5">
      <Flex
        direction="column"
        h="250px"
        maxWidth="1280px"
        mx="auto"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing={5}
          alignItems="center"
        >
          <Link className="bounce" href="https://www.linkedin.com/in/samuel-boada21/" isExternal>
            <Button leftIcon={<FaLinkedinIn size={"20px"} />} {...buttonStyle}>
              LinkedIn
            </Button>
          </Link>
          <Link className="bounce" href="https://github.com/samuelboada21" isExternal>
            <Button leftIcon={<FaGithub size={"20px"} />} {...buttonStyle}>
              GitHub
            </Button>
          </Link>
          <Link className="bounce" href="mailto:omarsamuel212121@gmail.com">
            <Button leftIcon={<FaEnvelope size={"20px"} />} {...buttonStyle}>
              Email
            </Button>
          </Link>
        </Stack>
      </Flex>
      <Flex justifyContent={"center"} pb="20px">
        <Text textAlign="center" color="white">© {currentYear} Samuel Boada. All rights reserved.</Text>
      </Flex>
    </Box>
  );
}

export default Footer;
