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
        Habilidades
      </Text>
      <Flex
        direction={"column"}
        // height="100%"
        // justifyContent="center"
        // px="5"
        maxWidth="1100px"
        mx="auto"
      >
        <Text
          fontSize={{ base: "14px", sm: "18px" }}
          fontWeight={"semibold"}
          my="5"
          textAlign={{ base: "left", sm: "center" }}
        >
          {/* I operate smoothly in both team environments and individual projects,
        distinguishing myself through responsibility and commitment. */}
          Me desenvuelvo de buena manera en entornos de trabajo en equipo y en proyectos individuales, destacando por mi responsabilidad y
          compromiso.
        </Text>
        <Text
          fontSize={{ base: "14px", sm: "18px" }}
          fontWeight={"semibold"}
          textAlign={{ base: "left", sm: "center" }}
        >
          {/* I have experience leading projects and work teams. I enjoy using tools
          that improve and facilitate development. */}
          Tengo experiencia en la creación y mantenimiento de API REST utilizando Node.js y Spring Boot, lo que me ha permitido desarrollar soluciones robustas y escalables. Estoy familiarizado con herramientas y frameworks como Express, Hibernate, y JPA.
        </Text>
      </Flex>

      <TechsIcons />
    </Flex>
  );
}

export default Skills;
