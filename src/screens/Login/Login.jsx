
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
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <Box sx={{width:"500px",position:"relative" ,top:"-100px"
               }}>
                <img src={loginimage} alt="loginimage" width={500} />
              </Box>
              <Box sx={{ width: "400px",position:"absolute", top:"330px" }}>
                <Typography
                  sx={{
                    borderTop: "3px solid white",
                    borderLeft: "3px solid white",
                    fontSize: "38px",
                    padding: "20px",
                    color: "white",
                    borderRadius: "20px",
                  }}
                >
                  Learning <br />Management <br />
                  System
                  "Login"
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid>
            <LoginForm />
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default Login;

