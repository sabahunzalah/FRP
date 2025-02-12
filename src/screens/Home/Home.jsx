
import React from "react";
import ResponsiveAppBar from "../../components/NavBar/Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import image1 from "../../assets/output-onlinegiftools (1).gif";
import { Typography } from "@mui/material";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #f0f8f5, #007763)",
        width: "100%",
        height: "auto",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ResponsiveAppBar />

      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, 
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          paddingX: { xs: 2, sm: 4, md: 8 }, 
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" }, // Center on small screens
            alignItems: "center",
            marginY:{xs:"7px" ,sm:"7px"},
            // border:"2px solid red"

          }}
        >
          <Typography
            variant="h3"
            sx={{
              borderTop: "3px solid #007763",
              borderLeft: "3px solid #007763",
              padding: { xs: "10px", sm: "15px", md: "20px" },
              fontWeight: "600",
              height: "auto",
              lineHeight: "1.2",
              width: { xs: "90%", sm: "80%", md: "430px" },
              color: "#007763",
              textAlign: { xs: "center", md: "left" },
              borderRadius: "20px",
              fontSize: { xs: "20px", sm: "24px", md: "32px", lg: "40px" },
            }}
          >
            <ReactTyped
              typeSpeed={40}
              strings={[
                "WELCOME TO THE LEARNING MANAGEMENT SYSTEM OF JAWAN PAKISTAN",
              ]}
              showCursor={false}
            />
          </Typography>
        </Grid>

        {/* Image Grid */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img
            src={image1}
            alt="LMS Animation"
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

