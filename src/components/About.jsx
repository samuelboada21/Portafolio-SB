/* eslint-disable react/no-unescaped-entities */
import { Flex, Text, Image, useMediaQuery } from "@chakra-ui/react";
import theme from "../utils/Chakra-theme";
import ImageBack from "./ImageBack";

function About() {
  const [w] = useMediaQuery("(min-width: 1220px)");
  return (
    <>
      {w && (
        <Flex maxWidth="1400px" mx="auto">
          <ImageBack />
        </Flex>
      )}
      <Flex
        justifyContent="center"
        id="about"
        height="100%"
        maxWidth="1280px"
        mx="auto"
        px="5"
      >
        <Flex
          direction="column"
          maxWidth="650px"
          mt="150px"
          alignItems="center"
          mx="auto"
        >
          <Text
            fontSize={{ base: "14px", sm: "18px" }}
            fontWeight={"semibold"}
            my="5"
            textAlign={{ base: "left", sm: "center" }}
          >
            {/* Hello! Welcome to my website. I'm Samuel Boada, passionate about web
            development and always ready to tackle new challenges and solve
            problems. */}
            ¡Hola! Bienvenidos a mi página web. Soy Samuel Boada, apasionado por el desarrollo web y siempre dispuesto a afrontar nuevos retos y resolver problemas.
          </Text>
          <Text
            fontSize={["2xl", "4xl", "5xl", "6xl", "7xl"]}
            textAlign={{ base: "left", sm: "center" }}
            fontFamily="Archivo Black"
            lineHeight="shorter"
            my="5"
            bgClip="text"
            bgGradient={theme.colors.gradient.title}
          >
            Full Stack Web Developer
          </Text>
          <Text
            fontSize={{ base: "14px", sm: "18px" }}
            fontWeight={"semibold"}
            my="5"
            textAlign={{ base: "left", sm: "center" }}
          >
            {/* I am dedicated to learning and improving my skills to deliver more
            effective and creative development solutions. */}
            Dedico parte de mi tiempo a seguir aprendiendo y mejorando mis habilidades para ofrecer soluciones de desarrollo más eficaces y creativas.
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent={"center"}>
        <Image alt="Ilustration" src="/Fabout.png" mt={"50px"} />
      </Flex>
    </>
  );
}

export default About;
