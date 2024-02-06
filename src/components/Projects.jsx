import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Tasks Management",
      imageUrl: "project2.png",
      githubUrl: "https://github.com/samuelboada21/MERN-Proyect",
      liveUrl: "https://tasks-management-sb21.onrender.com",
      techs: ["React.js", "Node.js","JavaScript", "MongoDB"],
    },
    {
      title: "Employee Management",
      imageUrl: "/project1.png",
      githubUrl: "https://github.com/samuelboada21/Spring-Employee-Reports",
      liveUrl: "https://employee-sb.onrender.com",
      techs: ["Java","SpringBoot", "Bootstrap","PostgreSQL"],
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
