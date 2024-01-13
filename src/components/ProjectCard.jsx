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
import { iconList } from "./TechsIcons";
import { Toolip } from "./Toolip";

const ProjectCard = ({ title, imageUrl, githubUrl, techs }) => {
  const [w] = useMediaQuery("(min-width: 400px)");
  const filteredTechs = iconList.filter((tech) => techs.includes(tech.name));

  return (
    <Flex direction={"column"}>
      <Card
        borderRadius="20px"
        overflow="hidden"
        m="2"
        boxShadow="md"
        bg={"transparent"}
      >
        <CardBody>
          <Image
            src={imageUrl}
            alt={`Imagen de ${title}`}
            borderRadius="lg"
            w={"100%"}
            h={"260px"}
          />
          <Stack mt="3" spacing="1">
            <Flex
              direction={w ? "row" : "column"}
              justifyContent="space-between"
              my={"10px"}
            >
              <Text fontSize="xl" mb="2" fontWeight={"bold"}>
                {title}
              </Text>
              <Flex>
                {filteredTechs.map((tech, index) => (
                  <Toolip key={index} text={tech.name}>
                    <Icon
                      as={tech.icon}
                      fontSize={"32px"}
                      color={tech.color}
                      ml={index > 0 ? 2 : 0}
                    />
                  </Toolip>
                ))}
              </Flex>
            </Flex>
            <ButtonGroup
              spacing={{ base: "0", xs: "6" }}
              flexDirection={{ base: "column", xs: "row" }}
            >
              <Button
                leftIcon={<FaGithub />}
                variant="solid"
                colorScheme="blue"
                onClick={() => window.open(githubUrl, "_blank")}
                w={"110px"}
                mb={"10px"}
              >
                GitHub
              </Button>
              <Button
                leftIcon={<FaGithub />}
                variant="solid"
                colorScheme="red"
                w={"110px"}
                onClick={() => window.open(githubUrl, "_blank")}
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
