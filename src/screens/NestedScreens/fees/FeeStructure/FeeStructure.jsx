import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Modal,
  Box,
  Select,
  MenuItem,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const courses = [
  { name: "MERN Stack", duration: 6, monthlyFee: 2000 },
  { name: "Flutter", duration: 6, monthlyFee: 2500 },
  { name: "Data Science", duration: 6, monthlyFee: 3000 },
];

const FeeStructure = () => {
  const [openModal, setOpenModal] = useState(true);
  const [student, setStudent] = useState({
    enrollmentNo: "",
    name: "",
    course: "",
  });
  const [fees, setFees] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleCourseSelect = (e) => {
    const selectedCourse = courses.find((c) => c.name === e.target.value);
    setStudent({ ...student, course: selectedCourse.name });

    const feeList = Array.from({ length: selectedCourse.duration }, (_, i) => ({
      month: `Month ${i + 1}`,
      classes: 4,
      fee: selectedCourse.monthlyFee,
      status: Math.random() > 0.5 ? "Submitted" : "Overdue", // Random status for UI demo
    }));

    setFees(feeList);
  };

  const handleSubmit = () => {
    if (student.enrollmentNo && student.name && student.course) {
      setOpenModal(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* Modal for Student Details */}
      <Modal open={openModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Enter Student Details
          </Typography>
          <TextField
            fullWidth
            label="Enrollment No"
            name="enrollmentNo"
            variant="outlined"
            margin="dense"
            value={student.enrollmentNo}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Student Name"
            name="name"
            variant="outlined"
            margin="dense"
            value={student.name}
            onChange={handleChange}
          />
          <Select
            fullWidth
            displayEmpty
            value={student.course}
            onChange={handleCourseSelect}
            sx={{ mt: 2 }}
          >
            <MenuItem value="" disabled>
              Select a Course
            </MenuItem>
            {courses.map((course) => (
              <MenuItem key={course.name} value={course.name}>
                {course.name}
              </MenuItem>
            ))}
          </Select>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, backgroundColor: "#007763" }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Modal>

      {/* Fee Structure Display */}
      {!openModal && (
        <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Fee Structure - {student.course}
          </Typography>
          {fees.map((fee, index) => (
            <Card key={index} sx={{ mb: 2, p: 2 }}>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={3}>
                    <Typography variant="h6">{fee.month}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography>Classes: {fee.classes}</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography>Fee: {fee.fee} PKR</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Chip
                      label={fee.status}
                      color={fee.status === "Submitted" ? "success" : "error"}
                    />
                  </Grid>
                  <Grid item xs={1}>
                    {fee.status === "Overdue" && (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate("/dashboard/feesSubmission")}
                      >
                        Pay
                      </Button>
                    )}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Paper>
      )}
    </Container>
  );
};

export default FeeStructure;
