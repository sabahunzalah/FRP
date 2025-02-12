import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import  { db ,auth} from "../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  border: "none",
  backgroundColor: "transparent",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));
export default function SignUpForm(props) {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState("");

  const navigate = useNavigate();


  const [userData, setuserData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
    if (!userData) {
      toast.error("Required fields are missing!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then(async(userCredential) => {
        console.log("signup successfully...", userCredential);
        console.log("signup successfully...", userCredential.user.uid);
    
        //save data in firestore
        let UserId = userCredential.user.uid
        const saveData = await setDoc(doc(db, "users", UserId), userData);

        console.log(saveData);// here we use setdoc instead of addDoc because setDoc does not create automatic id 
        
        
        
        toast.success("SignUp SuccessFully...", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        navigate("/login");
      })
      .catch((error) => {
        toast.error("Something went wrong!!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <SignUpContainer direction="column" justifyContent="space-between">
      <Card variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
        >
          Sign Up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <FormLabel htmlFor="name">Full name</FormLabel>
          <TextField
            onChange={(e) => setuserData({ ...userData, name: e.target.value })}
            autoComplete="name"
            name="name"
            required
            fullWidth
            id="name"
            placeholder="Jon Snow"
            error={nameError}
            helperText={nameErrorMessage}
            color={nameError ? "error" : "primary"}
          />

          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            onChange={(e) =>
              setuserData({ ...userData, email: e.target.value })
            }
            required
            fullWidth
            id="email"
            placeholder="your@email.com"
            name="email"
            autoComplete="email"
            variant="outlined"
            error={emailError}
            helperText={emailErrorMessage}
            color={passwordError ? "error" : "primary"}
          />

          <FormLabel htmlFor="password">Password</FormLabel>
          <TextField
            required
            onChange={(e) =>
              setuserData({ ...userData, password: e.target.value })
            }
            fullWidth
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="new-password"
            variant="outlined"
            error={passwordError}
            helperText={passwordErrorMessage}
            color={passwordError ? "error" : "primary"}
          />

          <Typography>
             Already have an account?
            <Link to={"/login"} style={{ color: "#007763" }}>
              Login
            </Link>
          </Typography>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ background: "#007763" }}
          >
            Sign up
          </Button>
        </Box>
      </Card>
    </SignUpContainer>
  );
}
