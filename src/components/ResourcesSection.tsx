import { Box, Button, Container, Stack, Typography, Grid } from "@mui/material";
import udemyLogo from "../assets/icons/Udemy.png";
import udacityLogo from "../assets/icons/udacity.svg";
import theOdinLogo from "../assets/icons/LKvUgs4u_400x400.jpg";
import freeCodeCampLogo from "../assets/icons/9892522.png";
import cs50Logo from "../assets/icons/12ja_48_01_.jpg";
import softwareArchBook from "../assets/icons/SoftwareArchitecture.jpg";
import graphqlBook from "../assets/icons/graphql.png";
import eloquentJsBook from "../assets/icons/cover.png";
import codingInterviewBook from "../assets/icons/codingInterview.jpg";
import cleanCodeBook from "../assets/icons/cleanCode.jpg";

const ResourcesSection = () => (
  <Container sx={{ my: 6 }} id="Resources">
    <Box mb={8}>
      <Typography variant="h4" component="h2" gutterBottom>
        Resources
      </Typography>
      <Typography>
        Here is a list of my favourite websites, Youtube Channels and Books:
      </Typography>
      <Typography variant="h5" component="h3" mt={4}>
        Online Courses
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" my={2}>
        <Box textAlign="center">
          <Button href="https://www.udemy.com/" target="_blank">
            <img src={udemyLogo} alt="Udemy Logo" style={{ height: 48 }} />
          </Button>
          <Typography variant="body2">Udemy</Typography>
        </Box>
        <Box textAlign="center">
          <Button href="https://eu.udacity.com/" target="_blank">
            <img src={udacityLogo} alt="Udacity Logo" style={{ height: 48 }} />
          </Button>
          <Typography variant="body2">Udacity</Typography>
        </Box>
        <Box textAlign="center">
          <Button href="https://www.theodinproject.com/" target="_blank">
            <img
              src={theOdinLogo}
              alt="The Odin Project Logo"
              style={{ height: 48, borderRadius: 8 }}
            />
          </Button>
          <Typography variant="body2">The Odin Project</Typography>
        </Box>
        <Box textAlign="center">
          <Button href="https://www.freecodecamp.org/" target="_blank">
            <img
              src={freeCodeCampLogo}
              alt="freeCodeCamp Logo"
              style={{ height: 48, borderRadius: 8 }}
            />
          </Button>
          <Typography variant="body2">freeCodeCamp</Typography>
        </Box>
        <Box textAlign="center">
          <Button href="https://cs50.harvard.edu/" target="_blank">
            <img
              src={cs50Logo}
              alt="CS50 Logo"
              style={{ height: 48, borderRadius: 8 }}
            />
          </Button>
          <Typography variant="body2">CS50</Typography>
        </Box>
      </Stack>
      <Typography variant="h5" component="h3" mt={4}>
        Books
      </Typography>
      <Grid container spacing={3} mb={2}>
        <Grid size={4}>
          <Box textAlign="center" mb={2}>
            <Button
              href="https://www.oreilly.com/library/view/fundamentals-of-software/9781492043447/"
              target="_blank"
            >
              <img
                src={softwareArchBook}
                alt="Fundamentals of Software Architecture"
                style={{ height: 150 }}
              />
            </Button>
            <Typography variant="body2">
              Fundamentals of Software Architecture
            </Typography>
          </Box>
        </Grid>
        <Grid size={4}>
          <Box textAlign="center" mb={2}>
            <Button href="https://graphql-book.com/" target="_blank">
              <img
                src={graphqlBook}
                alt="Learning GraphQL"
                style={{ height: 150 }}
              />
            </Button>
            <Typography variant="body2">Learning GraphQL</Typography>
          </Box>
        </Grid>
        <Grid size={4}>
          <Box textAlign="center" mb={2}>
            <Button
              href="https://www.oreilly.com/library/view/clean-code/9780136083238/"
              target="_blank"
            >
              <img
                src={cleanCodeBook}
                alt="Clean Code"
                style={{ height: 150 }}
              />
            </Button>
            <Typography variant="body2">Clean Code</Typography>
          </Box>
        </Grid>
        <Grid size={4}>
          <Box textAlign="center" mb={2}>
            <Button href="https://eloquentjavascript.net/" target="_blank">
              <img
                src={eloquentJsBook}
                alt="Eloquent JavaScript"
                style={{ height: 150 }}
              />
            </Button>
            <Typography variant="body2">Eloquent JavaScript</Typography>
          </Box>
        </Grid>
        <Grid size={4}>
          <Box textAlign="center" mb={2}>
            <Button
              href="https://www.amazon.com/Coding-Interview-Programming-Questions-Answers/dp/0984782850"
              target="_blank"
            >
              <img
                src={codingInterviewBook}
                alt="Cracking the Coding Interview"
                style={{ height: 150 }}
              />
            </Button>
            <Typography variant="body2">
              Cracking the Coding Interview
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Typography variant="h5" component="h3" mt={4}>
        Youtube Channels I enjoy
      </Typography>
      <Stack component="ul" spacing={1} sx={{ pl: 2 }}>
        <li>
          <Button href="https://www.youtube.com/@TraversyMedia" target="_blank">
            TraversyMedia
          </Button>
        </li>
        <li>
          <Button
            href="https://www.youtube.com/@WebDevSimplified"
            target="_blank"
          >
            Web Dev Simplified
          </Button>
        </li>
        <li>
          <Button
            href="https://www.youtube.com/@maximilian-schwarzmueller"
            target="_blank"
          >
            Maximilian Schwarzmüller
          </Button>
        </li>
        <li>
          <Button href="https://www.youtube.com/@jherr" target="_blank">
            Jack Herrington
          </Button>
        </li>
        <li>
          <Button href="https://www.youtube.com/@Fireship" target="_blank">
            Fireship
          </Button>
        </li>
        <li>
          <Button href="https://www.youtube.com/@IBMTechnology" target="_blank">
            IBM Technology
          </Button>
        </li>
      </Stack>
    </Box>
  </Container>
);

export default ResourcesSection;
