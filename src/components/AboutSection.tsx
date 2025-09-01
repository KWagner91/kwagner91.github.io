import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import profilePic from "../assets/Kwagner2.jpg";

const AboutSection = () => (
  <Box
    id="About"
    sx={{
      width: "100%",
      py: { xs: 8, md: 12 },
      px: 2,
      background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
      color: "white",
      textAlign: "center",
    }}
  >
    <Container>
      <Avatar
        alt="Picture of K.Bonev-Wagner"
        src={profilePic}
        sx={{
          width: 200,
          height: 200,
          margin: "0 auto",
          mb: 3,
          border: "4px solid white",
          boxShadow: 4,
        }}
      />
      <Typography variant="h5" component="h1" gutterBottom sx={{ mx: "auto" }}>
        My name is <b>Kerstin Bonev-Wagner</b>, I am a React Frontend Developer
        based in Munich, Germany.
      </Typography>
      <Typography
        variant="h6"
        component="section"
        sx={{ mx: "auto", mt: 2, opacity: 0.9, fontWeight: 400 }}
      >
        I am an open-minded problem solver who enjoys overcoming new challenges.
        My goal is always to deliver high-quality results that meet the needs of
        my users, whether working on small or large-scale projects.
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="#Projects"
          sx={{ borderRadius: 8, px: 4 }}
        >
          View Projects
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          size="large"
          href="#Contact"
          sx={{ borderRadius: 8, px: 4 }}
        >
          Contact Me
        </Button>
      </Stack>
    </Container>
  </Box>
);

export default AboutSection;
