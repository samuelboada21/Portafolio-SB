import { Flex, Image } from "@chakra-ui/react";
import Background from "./Background";

function ImageBack() {
  return (
    <Flex
      width="270px"
      height="380px"
      mt="93px"
      //   borderBottomRightRadius="300px"
      position="absolute"
    >
      <Flex
      width="290px"
      height="400px"
      // ml="15px"
      // mt={"2px"}
        borderBottomRightRadius="210px"
        // borderBottomLeftRadius="60px"
      position="absolute"
      bg={"black"}
    ></Flex>
      <Image
        src={"/public/Perfil2.png"}
        zIndex={"1"}
        alt="Logo"
        // w="300px"
        mt={"40px"}
        h={"350px"}
        borderBottomRightRadius="200px"
        style={{ transform: 'rotate(20deg)' }}
      />
      <Background
        style={{
          borderBottomRightRadius: "200px",
          overflow: "hidden",
        }}
      />
    </Flex>
  );
}

export default ImageBack;
