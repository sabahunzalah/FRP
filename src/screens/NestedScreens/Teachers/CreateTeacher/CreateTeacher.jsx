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

const courses = ["Web and App Development Hybrid", "Flutter","Data science", "Front End","Backend Development","Mobile Native"];

const CreateTeacher = () => {
  const [registerUser, setRegisterUser] = useState({
    userName: "",
    qualification: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    gender: "",
    course: "",
  });
  const [selectedCourse, setSelectedCourse] = useState("");
  const [dob, setDob] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [openCropModal, setOpenCropModal] = useState(false);

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
  const navigate = useNavigate()

  const handleCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, []);
  const submitUser = async () => {
    try {
      const docRef = await addDoc(collection(db, "Teachers"), registerUser);
      console.log("Document: ", docRef);
      console.log("Document written with ID: ", docRef.id);
      navigate('/dashboard/teacherList')
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
          Teacher Registration Form
        </Typography>

        <Grid container spacing={2}>
          {/* Full Name */}
          <Grid item xs={12} sm={6}>
            <FormLabel>Full Name</FormLabel>
            <TextField
              fullWidth
              type="text"
              onChange={(e) => {
                setRegisterUser({ ...registerUser, userName: e.target.value });
              }}
            />
          </Grid>

          {/* Father's Name */}
          <Grid item xs={12} sm={6}>
            <FormLabel>Qualification</FormLabel>
            <TextField
              fullWidth
              type="text"
              onChange={(e) => {
                setRegisterUser({
                  ...registerUser,
                  qualification: e.target.value,
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
                setRegisterUser({ ...registerUser, email: e.target.value });
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
                setRegisterUser({ ...registerUser, phone: e.target.value });
              }}
            />
          </Grid>

          {/* Address */}
          <Grid item xs={12}>
            <FormLabel>Address</FormLabel>
            <TextField
              fullWidth
              onChange={(e) => {
                setRegisterUser({ ...registerUser, address: e.target.value });
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
                setRegisterUser({ ...registerUser, dob: e.target.value });
              }}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          {/* Course Selection */}
          <Grid item xs={12} sm={6}>
            <FormLabel> Course you can teach</FormLabel>
            <Select
              fullWidth
              value={selectedCourse} // Ensure value is set properly
              onChange={(e) => {
                setSelectedCourse(e.target.value); // Update state
                setRegisterUser({ ...registerUser, course: e.target.value }); // Update object
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
                setRegisterUser({ ...registerUser, gender: e.target.value });
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

          {/* Upload & Crop Picture */}
          <Grid item xs={12} sm={6}>
            <FormLabel>Upload Picture</FormLabel>
            <Box display="flex" alignItems="center" gap={2}>
              <Button
                variant="contained"
                component="label"
                sx={{ width: "100%", backgroundColor: " #007763" }}
              >
                Browse
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </Button>
              {selectedFile && (
                <Button
                  variant="outlined"
                  onClick={() => setOpenCropModal(true)}
                >
                  Crop
                </Button>
              )}
            </Box>
            {imageSrc && (
              <Box
                mt={2}
                sx={{
                  width: "120px",
                  height: "120px",
                  border: "1px solid #ccc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={imageSrc}
                  alt="Preview"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            )}
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

      {/* Crop Modal */}
      <Modal open={openCropModal} onClose={() => setOpenCropModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 3,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Crop Image
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: 250,
              position: "relative",
              backgroundColor: "#000",
            }}
          >
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={handleCropComplete}
            />
          </Box>
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="contained" onClick={() => setOpenCropModal(false)}>
              Done
            </Button>
            <Button variant="outlined" onClick={() => setOpenCropModal(false)}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Paper>
  );
};

export default CreateTeacher;
