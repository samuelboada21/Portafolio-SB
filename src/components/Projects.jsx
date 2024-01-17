import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Task App MERN",
      imageUrl: "/public/perfil.png",
      githubUrl: "https://github.com/ejemplo/proyecto1",
      liveUrl: "https://desplegado.com",
      techs: ["React.js", "JavaScript", "MongoDB", "Java", "MySQL", "HTML"],
    },
    {
      title: "Proyecto 2",
      imageUrl: "/public/perfil.png",
      githubUrl: "https://github.com/ejemplo/proyecto2",
      liveUrl: "https://desplegado.com",
      techs: ["React", "JavaScript", "MySQL"],
    },
    {
      title: "Proyecto 3",
      imageUrl: "/public/perfil.png",
      githubUrl: "https://github.com/ejemplo/proyecto2",
      liveUrl: "https://desplegado.com",
      techs: ["React", "Java"],
    },
    {
      title: "Proyecto 4",
      imageUrl: "/public/perfil.png",
      githubUrl: "https://github.com/ejemplo/proyecto2",
      liveUrl: "https://desplegado.com",
      techs: ["React.js", "JavaScript"],
    },
  ];

  return (
    <>
      <Text
        fontSize={["2xl", "3xl", "4xl", "5xl"]}
        fontWeight={"bold"}
        textAlign="center"
        id="projects"
        pt="100px"
        mb="20px"
      >
        Projects
      </Text>
      <Flex justifyContent={"center"}
        mx="auto"
        px="5">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing="20px"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              techs={project.techs}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Projects;
