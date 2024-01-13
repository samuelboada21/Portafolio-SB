import { Text, Flex } from "@chakra-ui/react";
import TechsIcons from "./TechsIcons";

function Skills() {
  return (
    <Flex direction={"column"} mx="20px">
      <Text
        fontSize={["2xl", "3xl", "4xl"]}
        textAlign="center"
        fontFamily="Archivo Black"
        lineHeight="shorter"
        id="skills"
        pt="100px"
        mb="20px"
      >
        Skills
      </Text>
      <Text fontSize="18px" fontWeight={"semibold"} my="5" textAlign={"center"}>
        I operate smoothly in both team environments and individual projects,
        distinguishing myself through responsibility and commitment.
      </Text>
      <Text fontSize="18px" fontWeight={"semibold"} textAlign={"center"}>
        I have experience leading projects and work teams. I enjoy using tools
        that improve and facilitate development.
      </Text>
      <TechsIcons/>
    </Flex>
  );
}

export default Skills;
