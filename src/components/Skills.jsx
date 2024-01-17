import { Text, Flex } from "@chakra-ui/react";
import TechsIcons from "./TechsIcons";
function Skills() {
  return (
    <Flex
      direction={"column"}
      height="100%"
      justifyContent="center"
      maxWidth="1280px"
      mx="auto"
      px="5"
    >
      <Text
        fontSize={["2xl", "3xl", "4xl", "5xl"]}
        fontWeight={"bold"}
        textAlign="center"
        lineHeight="shorter"
        id="skills"
        pt="100px"
        mb="20px"
      >
        Skills
      </Text>
      <Text
        fontSize={{ base: "14px", sm: "18px" }}
        fontWeight={"semibold"}
        my="5"
        textAlign={{ base: "left", sm: "center" }}
      >
        I operate smoothly in both team environments and individual projects,
        distinguishing myself through responsibility and commitment.
      </Text>
      <Text
        fontSize={{ base: "14px", sm: "18px" }}
        fontWeight={"semibold"}
        textAlign={{ base: "left", sm: "center" }}
      >
        I have experience leading projects and work teams. I enjoy using tools
        that improve and facilitate development.
      </Text>
      <TechsIcons />
    </Flex>
  );
}

export default Skills;
