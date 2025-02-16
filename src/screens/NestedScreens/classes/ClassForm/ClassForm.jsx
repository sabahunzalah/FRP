import React, { useState, useCallback } from "react";
import {
  Paper,
  Typography,
  Grid,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
  Modal,
} from "@mui/material";
import Cropper from "react-easy-crop";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../FirebaseConfig";
import { useNavigate } from "react-router-dom";

const courses = [
  "Web and App Development Hybrid",
  "Flutter",
  "Data science",
  "Front End",
  "Backend Development",
  "Mobile Native",
];

const ClassForm = () => {
  const [classForm, setClassForm] = useState({
    StudentName: "",
    fatherName: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    gender: "",
    course: "",
  });
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [dob, setDob] = useState("");

  // const handleCourseChange = (event) => {
  //   setSelectedCourse(event.target.value);
  // };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc(reader.result);
        setOpenCropModal(true);
      };
    }
  };

  const handleCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);
  const submitUser = async () => {
    try {
      const docRef = await addDoc(collection(db, "classData"), classForm);
      console.log("Document: ", docRef);
      console.log("Document written with ID: ", docRef.id);
      navigate("/dashboard/studentList");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <Paper
      elevation={20}
      sx={{ padding: 4, maxWidth: "800px", margin: "auto" }}
    >
      <FormControl fullWidth>
        <Typography sx={{ marginBottom: 2 }} variant="h4" align="center">
         Class Form
        </Typography>

        <Grid container spacing={2}>
          {/* Full Name */}
          <Grid item xs={12} sm={6}>
            <FormLabel>Full Name</FormLabel>
            <TextField
              fullWidth
              type="text"
              onChange={(e) => {
                setClassForm({ ...classForm, userName: e.target.value });
              }}
            />
          </Grid>

          {/* Father's Name */}
          <Grid item xs={12} sm={6}>
            <FormLabel>Father Name</FormLabel>
            <TextField
              fullWidth
              type="text"
              onChange={(e) => {
                ssetClassForm({
                  ...classForm,
                  fatherName: e.target.value,
                });
              }}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12} sm={6}>
            <FormLabel>Email</FormLabel>
            <TextField
              fullWidth
              type="email"
              onChange={(e) => {
                setClassForm({ ...classForm, email: e.target.value });
              }}
            />
          </Grid>

          {/* Phone */}
          <Grid item xs={12} sm={6}>
            <FormLabel>Phone</FormLabel>
            <TextField
              fullWidth
              type="tel"
              onChange={(e) => {
                setClassForm({ ...classForm, phone: e.target.value });
              }}
            />
          </Grid>

          {/* Address */}
          <Grid item xs={12}>
            <FormLabel>Address</FormLabel>
            <TextField
              fullWidth
              onChange={(e) => {
                setClassForm({ ...classForm, address: e.target.value });
              }}
            />
          </Grid>

          {/* Date of Birth */}
          <Grid item xs={12} sm={6}>
            <FormLabel>Date of Birth</FormLabel>
            <TextField
              fullWidth
              type="date"
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
                setClassForm({ ...classForm, dob: e.target.value });
              }}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          {/* Course Selection */}
          <Grid item xs={12} sm={6}>
            <FormLabel> Select Course</FormLabel>
            <Select
              fullWidth
              value={selectedCourse} // Ensure value is set properly
              onChange={(e) => {
                setSelectedCourse(e.target.value); // Update state
                setClassForm({ ...classForm, course: e.target.value }); // Update object
              }}
            >
              {courses.map((course) => (
                <MenuItem key={course} value={course}>
                  {course}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          {/* Gender */}
          <Grid item xs={12} sm={6}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              onChange={(e) => {
                setClassForm({ ...classForm, gender: e.target.value });
              }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              sx={{ width: "100%", backgroundColor: " #007763" }}
              variant="contained"
              onClick={submitUser}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </FormControl>

        
      
    </Paper>
  );
};

export default ClassForm;
