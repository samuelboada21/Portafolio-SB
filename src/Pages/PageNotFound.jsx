import { Button, Flex, Text, useColorMode } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import theme from "../utils/Chakra-theme";

function PageNotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  const { colorMode } = useColorMode();
  const colorS =
    colorMode === "light"
      ? theme.colors.gradient.triclaro
      : theme.colors.gradient.trioscuro;
  return (
    <Flex justifyContent={"center"} h={"100vh"} bg={colorS}>
      <Flex direction={"column"} justifyContent={"center"} alignItems="center">
        <Text fontSize={"xl"} fontWeight={"bold"}>
          {" "}
          Page Not Found{" "}
        </Text>
        <Button
          onClick={handleGoBack}
          w={"100px"}
          mt={"20px"}
          bg={theme.colors.gradient.buttonv}
          _hover={"none"}
          _active={"none"}
        >
          Go to Back
        </Button>
      </Flex>
    </Flex>
  );
}

export default PageNotFound;
