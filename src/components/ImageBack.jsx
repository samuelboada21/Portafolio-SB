import { Flex, Image } from "@chakra-ui/react";
import Background from "./Background";

function ImageBack() {
  return (
    <Flex
        width="270px"
        height="320px"
      mt="93px"
    //   borderBottomRightRadius="300px"
      position="absolute" 
    >
        <Image src={
            "/public/Perfil2.png"
          }
          zIndex={"1"}
          alt="Logo"
          w="300px"
          h={"322px"}
          borderBottomRightRadius="300px"/>
      <Background
        style={{
          borderBottomRightRadius: "300px", 
          overflow: "hidden", 
        }}
      />
    </Flex>
  );
}

export default ImageBack;
