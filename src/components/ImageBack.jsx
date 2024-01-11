import { Flex, Image } from "@chakra-ui/react";
import Background from "./Background";

function ImageBack() {
  return (
    <Flex width="270px" height="355px" mt="93px" position="absolute">
      {/* <Flex
        width="280px"
        height="390px"
        borderBottomRightRadius="210px"
        position="absolute"
        bg={"black"}
      ></Flex> */}
      <Image
        src={"/public/perfil.png"}
        zIndex={"1"}
        alt="profile"
        w="300px"
        // mt={"41px"}
        h={"355.5px"}
        borderBottomRightRadius="200px"
        boxShadow="0px 10px 15px rgba(0, 0, 0, 0.5)"
        // style={{ transform: 'rotate(0.2deg)' }}
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
