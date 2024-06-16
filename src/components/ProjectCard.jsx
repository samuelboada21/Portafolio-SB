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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Portal,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { IoMdLink, IoMdEye } from "react-icons/io";
import { iconList } from "./TechsIcons";
import { Toolip } from "./Toolip";
import theme from "../utils/Chakra-theme";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  githubUrl,
  liveUrl,
  techs,
  flag,
}) => {
  const [w] = useMediaQuery("(min-width: 400px)");
  const filteredTechs = iconList.filter((tech) => techs.includes(tech.name));

  return (
    <Flex direction={"column"} w={"100%"} position="relative">
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
              spacing={{ md: "4", sm: "4", xs: "0" }}
              flexDirection={["column", "column", "row", "row", "row"]}
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
              <Popover>
                <PopoverTrigger>
                  <Button
                    className="pulse"
                    leftIcon={<IoMdEye size={"21px"} />}
                    bg={theme.colors.gradient.button}
                    _hover={"none"}
                    _active={"none"}
                    color={"white"}
                    w={"110px"}
                    mb={"10px"}
                  >
                    Details
                  </Button>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent
                    zIndex="popover"
                    maxWidth={["200px", "200px", "400px"]}
                    maxHeight="300px"
                    overflow="hidden"
                    ml={["10px", "10px", "0px"]}
                  >
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader fontWeight="bold">
                      Descripción del Proyecto
                    </PopoverHeader>
                    <PopoverBody
                      overflowY="auto"
                      padding="10px"
                      fontSize="md"
                      maxHeight="250px"
                    >
                      <Text>{description}</Text>
                    </PopoverBody>
                  </PopoverContent>
                </Portal>
              </Popover>
              {flag && (
                <Button
                  className="pulse"
                  leftIcon={<IoMdLink size={"21px"} />}
                  bg={theme.colors.gradient.buttonv}
                  _hover={"none"}
                  _active={"none"}
                  color={"white"}
                  w={"110px"}
                  onClick={() => window.open(liveUrl, "_blank")}
                >
                  Live
                </Button>
              )}
            </ButtonGroup>
          </Stack>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default ProjectCard;
