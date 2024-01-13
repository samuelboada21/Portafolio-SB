import { SimpleGrid, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Task App MERN",
      imageUrl: "/public/perfil.png",
      githubUrl: "https://github.com/ejemplo/proyecto1",
      techs: ["React.js", "JavaScript", "MongoDB"],
    },
    {
      title: "Proyecto 2",
      imageUrl: "/public/perfil.png",
      githubUrl: "https://github.com/ejemplo/proyecto2",
      techs: ["React", "JavaScript", "MySQL"],
    },
    {
      title: "Proyecto 3",
      imageUrl: "/public/perfil.png",
      githubUrl: "https://github.com/ejemplo/proyecto2",
      techs: ["React", "Java"],
    },
    {
      title: "Proyecto 4",
      imageUrl: "/public/perfil.png",
      githubUrl: "https://github.com/ejemplo/proyecto2",
      techs: ["React.js", "JavaScript"],
    },
  ];

  return (
    <>
      <Text
        fontSize={["2xl", "3xl", "4xl"]}
        textAlign="center"
        fontFamily="Archivo Black"
        id="projects"
        pt="100px"
        mb="20px"
      >
        Projects
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" mx={"20px"}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            techs={project.techs}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default Projects;
