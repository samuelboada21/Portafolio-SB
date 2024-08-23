import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "SWAG - Arquitectos",
      description: "Sitio web estático enfocado en la presentación de renderizados arquitectónicos. El sitio ofrece una experiencia visual atractiva y optimizada para mostrar proyectos de arquitectura con alta calidad, siendo intuitiva su navigación.",
      imageUrl: "swag.png",
      githubUrl: "https://github.com/samuelboada21/PORTAFOLIO-ARQUI",
      liveUrl: "https://swag-arquitectos.vercel.app/",
      techs: ["React.js", "ChakraUI","JavaScript","CSS"],
      flag: true,
    },
    {
      title: "Gestión de Tareas",
      description: "Aplicativo web con login y registro, cada usuario puede crear, editar, ver y eliminar sus tareas. Le permite al usuario asignar una fecha para realizar su tarea.",
      imageUrl: "project2.png",
      githubUrl: "https://github.com/samuelboada21/MERN-Proyect",
      liveUrl: "https://tasks-management-sb21.onrender.com",
      techs: ["React.js", "Node.js","JavaScript", "MongoDB"],
      flag: true,
    },
    {
      title: "Gestión de Empleados",
      description: "Aplicativo web con login, el administrador puede crear, visualizar, editar y eliminar empleados, puede generar excel o pdf con la listas de sus empleados. Los empleados solo pueden generar excel y pdf y ver detalles de los otros empleados.",
      imageUrl: "/project1.png",
      githubUrl: "https://github.com/samuelboada21/Spring-Employee-Reports",
      liveUrl: "https://employee-sb.onrender.com",
      techs: ["Java","SpringBoot", "Bootstrap","PostgreSQL"],
      flag: false,
    },
    {
      title: "Frontend Simulador",
      description: "Aplicativo web para realizar simulacros de entreamiento de pruebas, es un proyecto grupal, el frontend fue realizado con React JS, se consume el API Rest, realizando la conexión a través de Axios, se trabajó con Chakra UI y Wouter.",
      imageUrl: "/Simulador.png",
      githubUrl: "https://github.com/luc4shk/Simulador-Frontend",
      liveUrl: "https://employee-sb.onrender.com",
      techs: ["React.js","JavaScript", "ChakraUI","CSS"],
      flag: false,
    },
    {
      title: "Backend Planeador",
      description: "Aplicativo web para facilitar a los docentes la planeación de sus materias, para dar cumplimiento con los resultados de aprendizaje. El administrador tiene distintas funcionalidades, entre las mas destacables la carga de excel con listado de docentes, materias, unidades temáticas, entre otros, y la generación automática de credenciales para cada docente cargado desde el excel. Es un proyecto grupal, el Backend fue realizado con Node JS como un API que será consumido por el frontend, la base de datos usada fue MySQL.",
      imageUrl: "/planeador.png",
      githubUrl: "https://github.com/samuelboada21/Planeador",
      liveUrl: "https://employee-sb.onrender.com",
      techs: ["Node.js","JavaScript", "MySQL"],
      flag: false,
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
        Proyectos
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
              description={project.description}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              techs={project.techs}
              flag={project.flag}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default Projects;
