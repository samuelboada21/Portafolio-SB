/* eslint-disable react/prop-types */
import {
  Image,
  Flex,
  Icon,
  Button,
  Stack,
  Card,
  CardBody,
  ButtonGroup,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import { iconList } from "./TechsIcons";
import { Toolip } from "./Toolip";
import theme from "../utils/Chakra-theme";

const ProjectCard = ({ title, imageUrl, githubUrl, liveUrl, techs }) => {
  const [w] = useMediaQuery("(min-width: 400px)");
  const filteredTechs = iconList.filter((tech) => techs.includes(tech.name));

  return (
    <Flex direction={"column"} w={"100%"}>
      <Card
        borderRadius="20px"
        overflow="hidden"
        m="2"
        boxShadow="md"
        bg={"transparent"}
      >
        <CardBody>
          <Image
            className="scale-on-hover"
            src={imageUrl}
            alt={`Imagen de ${title}`}
            borderRadius="lg"
            w={"500px"}
            h={"260px"}
          />
          <Stack mt="3" spacing="1">
            <Flex
              direction={w ? "row" : "column"}
              justifyContent="space-between"
              my={"10px"}
            >
              <Text
                fontSize={{ base: "l", sm: "xl" }}
                mb="2"
                fontWeight={"bold"}
              >
                {title}
              </Text>
              <Flex wrap="wrap">
                {filteredTechs.map((tech, index) => (
                  <Flex key={index}>
                    <Toolip text={tech.name}>
                      <Icon
                        as={tech.icon}
                        fontSize={"32px"}
                        color={tech.color}
                        ml={index > 0 ? 2 : 0}
                      />
                    </Toolip>
                  </Flex>
                ))}
              </Flex>
            </Flex>
            <ButtonGroup
              spacing={{ base: "0", xs: "6" }}
              flexDirection={{ base: "column", xs: "row" }}
            >
              <Button
                className="pulse"
                leftIcon={<FaGithub />}
                bg={theme.colors.gradient.buttonv}
                _hover={"none"}
                _active={"none"}
                color={"white"}
                onClick={() => window.open(githubUrl, "_blank")}
                w={"110px"}
                mb={"10px"}
              >
                GitHub
              </Button>
              <Button
                className="pulse"
                leftIcon={<IoMdLink size={"21px"} />}
                bg={theme.colors.gradient.button}
                _hover={"none"}
                _active={"none"}
                color={"white"}
                w={"110px"}
                onClick={() => window.open(liveUrl, "_blank")}
              >
                Live
              </Button>
            </ButtonGroup>
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default ProjectCard;
