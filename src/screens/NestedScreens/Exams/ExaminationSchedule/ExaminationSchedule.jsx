import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../FirebaseConfig";
import {
  Container,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  MenuItem,
  Select,
  FormControl,
  Grid,
  CircularProgress,
} from "@mui/material";

const ExaminationSchedule = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [examData, setExamData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExamData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "examData"));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setExamData(data);
      } catch (error) {
        console.error("Error fetching exam data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExamData();
  }, []);

  const handleChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={6} sx={{ padding: 4, marginTop: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Examination Schedule
        </Typography>

        <Grid container justifyContent="center" sx={{ marginBottom: 2 }}>
          <FormControl sx={{ width: 300 }}>
            <Select value={selectedCourse} onChange={handleChange} displayEmpty>
              <MenuItem value="" disabled>
                -- Select a Course --
              </MenuItem>
              {[...new Set(examData.map((exam) => exam.course))].map((course, index) => (
                <MenuItem key={index} value={course}>
                  {course}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {loading ? (
          <Grid container justifyContent="center">
            <CircularProgress />
          </Grid>
        ) : selectedCourse && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Student Name</strong></TableCell>
                  <TableCell><strong>Enrollment No</strong></TableCell>
                  <TableCell><strong>Email</strong></TableCell>
                  <TableCell><strong>Exam Date</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {examData
                  .filter((exam) => exam.course === selectedCourse)
                  .map((exam, index) => (
                    <TableRow key={index}>
                      <TableCell>{exam.studentName}</TableCell>
                      <TableCell>{exam.enrollmentNo}</TableCell>
                      <TableCell>{exam.email}</TableCell>
                      <TableCell>{exam.examDate}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Container>
  );
};

export default ExaminationSchedule;