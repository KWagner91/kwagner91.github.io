import { Box, Button, Container, Stack, Typography } from "@mui/material";

const ContactSection = () => (
  <Box
    id="Contact"
    component="footer"
    sx={{ bgcolor: "secondary.main", py: 4, mt: 6 }}
  >
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        How to Contact Me
      </Typography>
      <Typography>
        Thank you for your visit! Please do not hesitate to{" "}
        <Button
          href="mailto:K.bonev-wagner@gmx.at?Subject=Hello%20again"
          color="primary"
        >
          send me an email
        </Button>{" "}
        if you have further questions and hiring opportunities either remote or
        in Munich, Germany.
      </Typography>
      <Stack direction="row" spacing={2} mb={2}>
        <Button
          href="https://github.com/KWagner91"
          target="_blank"
          startIcon={<span className="fab fa-github" />}
        >
          Github
        </Button>
        <Button
          href="https://www.linkedin.com/in/kbonev-wagner/"
          target="_blank"
          startIcon={<span className="fab fa-linkedin" />}
        >
          LinkedIn
        </Button>
      </Stack>

      <hr />
      <Typography variant="caption" align="center" display="block">
        Icons by{" "}
        <Button href="https://icons8.com/" target="_blank">
          Icons8
        </Button>{" "}
        | Last update: August 2025
      </Typography>
    </Container>
  </Box>
);

export default ContactSection;
