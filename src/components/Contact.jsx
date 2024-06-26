/* eslint-disable react/no-unescaped-entities */
import {
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Icon,
  Box,
} from "@chakra-ui/react";
import { MdSend } from "react-icons/md";
import theme from "../utils/Chakra-theme";

function Contact() {
  const actionURL = "https://formspree.io/f/mayrnlpk";

  return (
    <Flex
      direction={"column"}
      px={"5"}
      id="contact"
      pt="100px"
      alignItems={"center"}
    >
      <Text
        fontSize={{ base: "14px", sm: "18px" }}
        fontWeight={"bold"}
        my="10"
        textAlign={{ base: "left", sm: "center" }}
        maxW={"750px"}
      >
        {/* Thank you for visiting my website. I look forward to accompanying you on
        your next web project. Let's create something amazing together! */}
        Gracias por visitar mi sitio web. Espero poder acompañarle en su próximo proyecto web. ¡Creemos algo increíble juntos!
      </Text>

      <Flex justifyContent="center" width="100%">
        <Box maxWidth="700px" width="100%">
          <form action={actionURL} method="POST">
            <FormControl id="contact-form" width="100%">
              <Flex direction={{ base: "column", sm: "row" }} mb="4">
                <FormControl flex="1" mr={{ base: "0", sm: "2" }}>
                  <FormLabel htmlFor="firstName">Nombres</FormLabel>
                  <Input
                    borderColor="gray.400"
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    boxShadow="md"
                  />
                </FormControl>
                <FormControl
                  flex="1"
                  ml={{ base: "0", sm: "2" }}
                  mt={{ base: "4", sm: "0" }}
                >
                  <FormLabel htmlFor="lastName">Apellidos</FormLabel>
                  <Input
                    borderColor="gray.400"
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    boxShadow="md"
                  />
                </FormControl>
              </Flex>

              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                borderColor="gray.400"
                id="email"
                name="_replyto"
                type="email"
                mb="4"
                required
                boxShadow="md"
              />

              <FormLabel htmlFor="message">Mensaje</FormLabel>
              <Textarea
                borderColor="gray.400"
                id="message"
                name="message"
                mb="4"
                required
                boxShadow="md"
              />

              <Flex direction={{ base: "column", sm: "row" }}>
                <Box
                  border="1px"
                  borderColor="gray.400"
                  p="2"
                  borderRadius="md"
                  boxShadow="md"
                  flex="1"
                  mr={{ base: "0", sm: "2" }}
                  mb={"10px"}
                >
                  <Text isTruncated whiteSpace={"nowrap"} my="auto">
                    omarsamuel212121@gmail.com
                  </Text>
                </Box>
                <Button
                className="animate-right"
                  w={"100px"}
                  bg={theme.colors.gradient.button}
                  color="white"
                  _hover={"none"}
                  _active={"none"}
                  type="submit"
                  rightIcon={<Icon as={MdSend} />}
                  boxShadow="md"
                >
                  Enviar
                </Button>
              </Flex>
            </FormControl>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Contact;
