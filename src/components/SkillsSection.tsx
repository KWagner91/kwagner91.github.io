import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import scrumPsm from "../assets/icons/psm.png";
import courseraCert from "../assets/icons/coursera.png";

const SkillsSection = () => (
  <Container sx={{ my: 6 }} id="Skills">
    <Box mb={6}>
      <Typography variant="h4" component="h2" gutterBottom>
        Skills
      </Typography>
      <Typography>
        I’m a Frontend Developer experienced in building and scaling
        applications in SaaS environments. I thrive
      </Typography>
      <ul style={{ marginLeft: 24 }}>
        <li>
          Collaboration & Delivery: Due to my Scrum Master certification able to
          teach agile teamwork, contributing to discussions, and improving the
        </li>
        <li>
          Continuous Improvement: Always looking for ways to refine processes,
          enhance user experience, and
        </li>
      </ul>

      <Typography variant="h5" component="h3" mt={4} mb={2}>
        Web Dev
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {[
          {
            label: "HTML5",
            src: "https://img.icons8.com/color/96/html-5--v1.png",
          },
          { label: "CSS3", src: "https://img.icons8.com/color/96/css3.png" },
          {
            label: "JavaScript",
            src: "https://img.icons8.com/color/96/javascript--v1.png",
          },
          {
            label: "Typescript",
            src: "https://img.icons8.com/color/96/typescript.png",
          },
          {
            label: "GraphQL",
            src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-graphql-an-open-source-data-query-and-manipulation-language-for-api-logo-color-tal-revivo.png",
          },
          {
            label: "Rest API",
            src: "https://img.icons8.com/color/96/api-settings.png",
          },
          {
            label: "React",
            src: "https://img.icons8.com/ultraviolet/80/react--v1.png",
            width: 80,
            height: 80,
          },
          { label: "Redux", src: "https://img.icons8.com/color/96/redux.png" },
          {
            label: "Jest",
            src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-color-tal-revivo.png",
          },
          {
            label: "Accessibility",
            src: "https://img.icons8.com/color/96/accessibility2--v1.png",
          },
          { label: "Git", src: "https://img.icons8.com/color/96/git.png" },
          {
            label: "Java",
            src: "https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png",
          },
          {
            label: "SQL",
            src: "https://img.icons8.com/dotty/80/sql.png",
            width: 80,
            height: 80,
          },
          {
            label: "UI Automator Testing",
            src: "https://img.icons8.com/color/96/android-os.png",
          },
          {
            label: "AWS",
            src: "https://img.icons8.com/?size=100&id=mHi46t5vguiz&format=png&color=000000",
          },
        ].map(({ label, src, width = 96, height = 96 }) => (
          <Grid
            size={{ xs: 6, sm: 4, md: 3 }}
            key={label}
            sx={{ textAlign: "center" }}
          >
            <Avatar
              alt={label}
              src={src}
              sx={{ width, height, margin: "0 auto", bgcolor: "transparent" }}
              variant="rounded"
            />
            <Typography variant="body1" mt={1}>
              {label}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" component="h3" mt={4} mb={2}>
        Certifications
      </Typography>
      <Stack
        direction="row"
        spacing={4}
        flexWrap="wrap"
        justifyContent="center"
        mb={4}
      >
        <Box textAlign="center">
          <Avatar
            alt="Scrum Master (PSM I)"
            src={scrumPsm}
            sx={{
              width: 96,
              height: 96,
              margin: "0 auto",
              bgcolor: "transparent",
            }}
            variant="rounded"
          />
          <Typography variant="body2">Scrum Master (PSM I)</Typography>
        </Box>
        <Box textAlign="center">
          <Avatar
            alt="People and Soft Skills for Success"
            src={courseraCert}
            sx={{
              width: 96,
              height: 96,
              margin: "0 auto",
              bgcolor: "transparent",
            }}
            variant="rounded"
          />
          <Typography variant="body2">
            People and Soft Skills for Success
          </Typography>
        </Box>
      </Stack>
    </Box>
  </Container>
);

export default SkillsSection;
