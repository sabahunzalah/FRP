import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import image from "../../assets/jawanpakistan.png";

const pages = [
  {
    name: "Signup",
    path: "/signup",
  },
  {
    name: "Login",
    path: "/login",
  },
];

function ResponsiveAppBar() {
  const navigate = useNavigate(); // Move useNavigate inside the component
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the correct path
    handleCloseNavMenu();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={image}
            alt="Jwp"
            sx={{
              width: 220,
              height: 40,
              display: { xs: "none", md: "flex" },
            }}
          />

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="success"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.path} onClick={() => handleNavigate(page.path)}>
                  <Typography sx={{ textAlign: "center", color: "green" }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            component="img"
            src={image}
            alt="Jwp"
            sx={{
              width: 220,
              height: 40,
              display: { xs: "flex", md: "none" },
            }}
          />

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: "10px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.path}
                onClick={() => handleNavigate(page.path)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  backgroundColor: "#007763",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
                variant="contained"
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
