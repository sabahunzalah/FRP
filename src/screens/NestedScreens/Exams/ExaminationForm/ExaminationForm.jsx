import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import {
  Container,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Grid,
  Button,
  Alert,
} from "@mui/material";
import { db } from "../../../../FirebaseConfig";
import { useNavigate } from "react-router-dom";

const ExaminationForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    enrollmentNo: "",
    email: "",
    phone: "",
    course: "",
    examDate: "",
  });
const navigate = useNavigate()

  const [errors, setErrors] = useState({});

  const courses = [
    "Web Development",
    "Data Science",
    "Cybersecurity",
    "AI & ML",
  ];

  // Validation function
  const validateForm = () => {
    let tempErrors = {};

    if (!formData.studentName.trim()) {
      tempErrors.studentName = "Student name is required";
    }

    if (!formData.enrollmentNo.trim()) {
      tempErrors.enrollmentNo = "Enrollment number is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.course) {
      tempErrors.course = "Please select a course";
    }

    if (!formData.examDate) {
      tempErrors.examDate = "Please select an exam date";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    
try {
  const docRef = await addDoc(collection(db, "examData"),formData);
  console.log("Document written with ID: ", docRef);
  console.log("Document written with ID: ", docRef.id);
  navigate("/dashboard/examinationShedule")
} catch (e) {
  console.error("Error adding document: ", e);
}

    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={6} sx={{ padding: 4, marginTop: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Examination Enrollment Form
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Student Name */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Student Name"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                error={!!errors.studentName}
                helperText={errors.studentName}
              />
            </Grid>

            {/* Enrollment No */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Enrollment No"
                name="enrollmentNo"
                value={formData.enrollmentNo}
                onChange={handleChange}
                error={!!errors.enrollmentNo}
                helperText={errors.enrollmentNo}
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>

            {/* Phone */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </Grid>

            {/* Course Selection */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Select Course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                error={!!errors.course}
                helperText={errors.course}
              >
                {courses.map((course, index) => (
                  <MenuItem key={index} value={course}>
                    {course}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Exam Date */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="date"
                label="Exam Date"
                name="examDate"
                value={formData.examDate}
                onChange={handleChange}
                error={!!errors.examDate}
                helperText={errors.examDate}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{backgroundColor:"#007763"}}
              >
                Enroll for Exam
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ExaminationForm;
