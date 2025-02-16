import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  Button,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";

const courses = [
  { name: "Web and App Development Hybrid", fee: "50,000" },
  { name: "Flutter", fee: "45,000" },
  { name: "Data Science", fee: "55,000" },
  { name: "Front End", fee: "40,000" },
  { name: "Backend Development", fee: "50,000" },
  { name: "Mobile Native", fee: "48,000" },
];

const FeeSubmission = () => {
  const [formData, setFormData] = useState({
    enrollmentNo: "",
    studentName: "",
    phone: "",
    email: "",
    course: "",
    fee: "",
  });

  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCourseChange = (e) => {
    const selectedCourse = e.target.value;
    const courseData = courses.find((course) => course.name === selectedCourse);
    setFormData({ ...formData, course: selectedCourse, fee: courseData?.fee });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.enrollmentNo)
      tempErrors.enrollmentNo = "Enrollment No. is required";
    if (!formData.studentName)
      tempErrors.studentName = "Student Name is required";

    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{11}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number must be 11 digits (PKR format)";
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Enter a valid email";
    }

    if (!formData.course) tempErrors.course = "Course selection is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form Submitted Successfully", formData);
      setOpenSnackbar(true); // Show success message
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={6} sx={{ padding: 4, marginTop: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Fee Structure Form
        </Typography>

        <Grid container spacing={3}>
          {/* Enrollment No */}
          <Grid item xs={12} sm={6}>
            <FormLabel>Enrollment No</FormLabel>
            <TextField
              fullWidth
              name="enrollmentNo"
              variant="outlined"
              value={formData.enrollmentNo}
              onChange={handleChange}
              error={!!errors.enrollmentNo}
              helperText={errors.enrollmentNo}
            />
          </Grid>

          {/* Student Name */}
          <Grid item xs={12} sm={6}>
            <FormLabel>Student Name</FormLabel>
            <TextField
              fullWidth
              name="studentName"
              variant="outlined"
              value={formData.studentName}
              onChange={handleChange}
              error={!!errors.studentName}
              helperText={errors.studentName}
            />
          </Grid>

          {/* Phone */}
          <Grid item xs={12} sm={6}>
            <FormLabel>Phone</FormLabel>
            <TextField
              fullWidth
              name="phone"
              type="tel"
              variant="outlined"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12} sm={6}>
            <FormLabel>Email</FormLabel>
            <TextField
              fullWidth
              name="email"
              type="email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>

          {/* Course Selection */}
          <Grid item xs={12} sm={6}>
            <FormLabel>Select Course</FormLabel>
            <FormControl fullWidth error={!!errors.course}>
              <Select
                displayEmpty
                name="course"
                value={formData.course}
                onChange={handleCourseChange}
              >
                <MenuItem value="" disabled>
                  Select a course
                </MenuItem>
                {courses.map((course) => (
                  <MenuItem key={course.name} value={course.name}>
                    {course.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {errors.course && (
              <Typography color="error">{errors.course}</Typography>
            )}
          </Grid>

          {/* Course Fee (Auto-filled) */}
          <Grid item xs={12} sm={6}>
            <FormLabel>Course Fee</FormLabel>
            <TextField
              fullWidth
              variant="outlined"
              value={formData.fee}
              disabled
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#007763",
                padding: 1.5,
                fontSize: 16,
                ":hover": { backgroundColor: "#005a4f" },
              }}
              onClick={handleSubmit}
            >
              Submit Fee
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Snackbar for Success Message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          variant="filled"
        >
          Fee Submission Successful!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default FeeSubmission;
