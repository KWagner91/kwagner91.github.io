import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const NavBar = () => (
  <AppBar position="sticky" color="default" elevation={1}>
    <Toolbar sx={{ justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button color="inherit" href="#About">
          About Me
        </Button>
        <Button color="inherit" href="#Skills">
          Skills
        </Button>
        <Button color="inherit" href="#Projects">
          Projects
        </Button>
        <Button color="inherit" href="#Resources">
          Resources
        </Button>
        <Button color="inherit" href="#Contact">
          Contact
        </Button>
      </Box>
      <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
        Kerstin Bonev-Wagner
      </Typography>
    </Toolbar>
  </AppBar>
);

export default NavBar;
