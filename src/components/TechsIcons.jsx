import { Text, Flex, Icon } from "@chakra-ui/react";
import {
  SiSpringboot,
  SiJavascript,
  SiChakraui,
  SiMongodb,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { Toolip } from "./Toolip";

// eslint-disable-next-line react-refresh/only-export-components
export const iconList = [
  { icon: FaReact, name: "React.js", color: "#61DAFB" },
  { icon: FaNodeJs, name: "Node.js", color: "#339933" },
  { icon: SiSpringboot, name: "SpringBoot", color: "#6DB33F" },
  { icon: SiChakraui, name: "ChakraUI", color: "#319795" },
  { icon: FaHtml5, name: "HTML", color: "#E34F26" },
  { icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: FaJava, name: "Java", color: "#007396" },
  { icon: FaBootstrap, name: "Bootstrap", color: "#7952B3" },
  { icon: FaGithub, name: "GitHub" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: GrMysql, name: "MySQL", color: "#4479A1" },
];

function TechsIcons() {
  // eslint-disable-next-line react/prop-types

  return (
    <>
      <Text
        fontSize={["2xl", "3xl", "4xl"]}
        textAlign="center"
        fontFamily="Archivo Black"
        lineHeight="shorter"
        my="50px"
      >
        Technologies
      </Text>

      <Flex
        justifyContent="center"
        wrap="wrap"
        gap={{ base: "30px", lg: "10px" }}
      >
        {iconList.map((IconComponent, index) => (
          <Flex
            key={index}
            w={{ base: "auto", lg: "calc(100% / 6 - 30px)" }}
            justifyContent="center"
            mb="30px"
          >
            <Toolip key={index} text={IconComponent.name}>
              <Icon
                as={IconComponent.icon}
                fontSize={"3rem"}
                color={IconComponent.color}
              ></Icon>
            </Toolip>
          </Flex>
        ))}
      </Flex>
    </>
  );
}

export default TechsIcons;
