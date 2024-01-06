import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import theme from "../utils/Chakra-theme";
import Image from "./ImageBack";

function About() {
  const [w] = useMediaQuery("(min-width: 1220px)");
  return (
    <>
      {w && <Image />}
      <Flex height="100%" justifyContent="center">
        <Flex
          direction={"column"}
          maxWidth={["250px", "400px", "550px", "700px"]}
          mt="120px"
        >
          <Text
            className="shake-animation"
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
            className="shake-animation"
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
            className="shake-animation"
            fontSize="l"
            fontWeight={"semibold"}
            my="5"
            textAlign={"center"}
          >
            Every day, I dedicate myself to learning and enhancing my skills to
            offer more effective and creative development solutions. My goal is
            to provide high-quality service, ensuring that each project not only
            meets but exceeds expectations.
          </Text>
          <Text
            className="shake-animation"
            fontSize="l"
            fontWeight={"semibold"}
            my="5"
            textAlign={"center"}
          >
            Thank you for visiting my website. I look forward to accompanying
            you on your next web project. Let's create something amazing
            together!
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

export default About;
