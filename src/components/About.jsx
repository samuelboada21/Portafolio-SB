/* eslint-disable react/no-unescaped-entities */
import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import theme from "../utils/Chakra-theme";
import Image from "./ImageBack";

function About() {
  const [w] = useMediaQuery("(min-width: 1220px)");
  return (
    <>
      {w && <Image />}
      <Flex height="100%" justifyContent="center" id="about" mx="20px">
        <Flex
          direction={"column"}
          maxWidth={ "650px"}
          mt="150px"
        >
          <Text
            fontSize="l"
            fontWeight={"semibold"}
            my="5"
            textAlign={"center"}
          >
            Hello! Welcome to my website. I'm Samuel Boada, passionate about web
            development and always ready to tackle new challenges and solve
            problems.
          </Text>
          <Text
            fontSize={["4xl", "5xl", "6xl", "7xl"]}
            textAlign="center"
            w
            fontFamily="Archivo Black"
            lineHeight="shorter"
            my="5"
            bgClip="text"
            bgGradient={theme.colors.gradient.title}
          >
            Full Stack Web Developer
          </Text>
          <Text
            fontSize="l"
            fontWeight={"semibold"}
            my="5"
            textAlign={"center"}
          >
            I am dedicated to learning and improving my skills to deliver more effective and creative development solutions.
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default About;
