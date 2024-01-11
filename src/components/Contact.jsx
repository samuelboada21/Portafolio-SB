import { Text, Flex } from "@chakra-ui/react";

function Contact() {
  return (
    <Flex direction={"column"} mx={"20px"}>
      <Text
        // className="shake-animation"
        fontSize="l"
        fontWeight={"semibold"}
        my="5"
        textAlign={"center"}
        bg={"blue"}
      >
        Thank you for visiting my website. I look forward to accompanying you on
        your next web project. Let's create something amazing together!
      </Text>
    </Flex>
  );
}

export default Contact;
