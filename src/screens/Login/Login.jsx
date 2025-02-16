
import { Box, CssBaseline, Grid, Typography } from "@mui/material";
import React from "react";

import loginimage from "../../assets/img3-removebg-preview.png";

import SignUpForm from "../../components/form/SignupForm";
import LoginForm from "../../components/form/LoginForm";

const Login = () => {
  return (
    <>
      <CssBaseline />
      <Grid container spacing={2}>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            background: "linear-gradient(to right, #007763, #f0f8f5)",
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px",
          }}
        >
         <Grid item xs={12} sm={6} md={5} lg={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: {lg:"column",md:"column",sm:"row",sx:"row"},
                justifyContent: {lg:"start",md:"start", sm:"space-between"},
                alignItems: "center",
             
              }}
            >
                <Box
                            component="img"
                            src={loginimage}
                            alt="loginimage"
                            sx={{
                              display:{lg:"block",md:"block",sm:"none",xs:"none"},
                              position:"relative" ,
                              top:{lg:"-99px", md:"-65px",sm:''},
                              width: { xs: "80%", sm: "200px", md: "400px", lg: "500px" }, // Different widths for each screen size
                              height: "auto",
                              maxWidth: "100%",
                            }}
                          />
                  <Box
                            sx={{
                              display:{lg:"block",md:"block",sm:"none",xs:"none"},
                              width: { lg: "400px", md: "300px" },
                              position: "absolute",
                              top: {lg:"330px",md:"330px",sm:"35px"},
                             
                            }}
                          >
                            <Typography
                              sx={{
                                borderTop: "3px solid white",
                                borderLeft: "3px solid white",
                                fontSize: { lg: "38px", md: "30px" },
                                padding: "20px",
                                color: "white",
                                borderRadius: "20px",
                              }}
                            >
                              Learning <br />
                              Management <br />
                              System "Signup"
                            </Typography>
                          </Box>
            </Box>
          </Grid>
         <Grid item xs={12} sm={12} md={8} lg={6}>
            <LoginForm />
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default Login;

