import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import feedbackAppImg from "../assets/project-screens/feedback-app.png";
import todoAppImg from "../assets/project-screens/todo-app.png";
import communityImg from "../assets/project-screens/CommUNITY.png";
import japanBlogImg from "../assets/project-screens/japan-blog.png";
import arcadeGameImg from "../assets/project-screens/arcarde-game.png";
import memoryGameImg from "../assets/project-screens/memory-game.png";

const projects = [
  {
    image: feedbackAppImg,
    alt: "Screenshot of Feedback Project",
    title: "React Feedback App",
    tags: ["React", "JSON Server", "Context API", "CSS"],
    description:
      "A Feedback App with a dummy JSON server as a backend. Inputs from the user are saved and feedback can be edited and deleted.",
    link: "https://github.com/KWagner91/feedback-app",
  },
  {
    image: todoAppImg,
    alt: "Screenshot of Fullstack Todo Webapp",
    title: "Fullstack Todo App",
    tags: ["Python", "Postgresql", "Flask", "SQLAlchemy", "JavaScript"],
    description:
      "In this Fullstack Application Todos can be created and saved on a local database. Each Todo Item is associated with a list and can be marked as done or not done.",
    link: "https://github.com/KWagner91/fullstack-todo-app",
  },
  {
    image: communityImg,
    alt: "Screenshot of CommUNITY Webapp",
    title: "CommUNITY - A Munich Neighbourhood Map",
    tags: [
      "Java",
      "Angular",
      "RestAPI",
      "MariaDB",
      "Spring & Maven",
      "Google Map API & Geocoding API",
    ],
    description: (
      <>
        <span>
          A Neighbourhood Map of Munich where users can register, make and reply
          to requests and find like-minded people from their local community.
        </span>
        <br />
        <small>
          This project was done in collaboration with 3 other devs as the final
          AW bootcamp project
        </small>
      </>
    ),
    link: "https://gitlab.com/KWagner91/community",
  },
  {
    image: japanBlogImg,
    alt: "Screenshot of Blog Website about Japan Trip 2019",
    title: "Japan Trip 2019 - Blog",
    tags: ["HTML/CSS", "Bulma Framework", "JavaScript"],
    description:
      "A static Blog Website with pictures from my Japan roundtrip in March - April 2019.",
    link: "https://gitlab.com/KWagner91/japan/",
  },
  {
    image: arcadeGameImg,
    alt: "Screenshot of Frogger Game",
    title: "Classic Arcade Game - Frogger",
    tags: ["HTML/CSS", "JavaScript OOP"],
    description:
      "An Arcade Game Clone of Frogger. The player has to reach the other side of the game board without being eaten by evil ladybirds. The game difficulty increases over time.",
    link: "https://github.com/KWagner91/arcade-game-clone",
  },
  {
    image: memoryGameImg,
    alt: "Screenshot of my Memory Game",
    title: "Memory Game",
    tags: ["HTML/CSS", "JavaScript"],
    description: "A simple Memory Game using Vanilla JavaScript and HTML/CSS.",
    link: "https://github.com/KWagner91/memory-game",
  },
];

const ProjectsSection = () => (
  <Box id="Projects" mb={8} sx={{ bgcolor: "secondary.main", py: 6 }}>
    <Container sx={{ my: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Selected Personal Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.title}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
      <Typography mt={4} textAlign="center">
        To review more of my personal projects, please visit me on{" "}
        <Button
          href="https://github.com/KWagner91"
          target="_blank"
          color="primary"
        >
          Github
        </Button>
      </Typography>
    </Container>
  </Box>
);

export default ProjectsSection;
