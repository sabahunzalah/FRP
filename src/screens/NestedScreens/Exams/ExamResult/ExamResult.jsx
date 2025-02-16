import React, { useState } from "react";
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
  Grid,
  Select,
  MenuItem,
  FormControl,
  Box,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const ExaminationResult = () => {
  const [selectedStudent, setSelectedStudent] = useState("");

  // Sample Student Results Data
  const resultsData = {
    "Ali Khan": [
      { subject: "Math", assignment: 18, lab: 22, finalExam: 50 },
      { subject: "English", assignment: 20, lab: 24, finalExam: 45 },
      { subject: "Science", assignment: 17, lab: 23, finalExam: 48 },
    ],
    "Ayesha Raza": [
      { subject: "Math", assignment: 14, lab: 18, finalExam: 30 },
      { subject: "English", assignment: 16, lab: 20, finalExam: 28 },
      { subject: "Science", assignment: 15, lab: 19, finalExam: 35 },
    ],
    "Bilal Ahmed": [
      { subject: "Math", assignment: 19, lab: 23, finalExam: 55 },
      { subject: "English", assignment: 22, lab: 25, finalExam: 52 },
      { subject: "Science", assignment: 20, lab: 24, finalExam: 49 },
    ],
  };

  // Function to calculate total marks and check if passed
  const calculateResult = (studentData) => {
    let totalMarks = 0;
    let passingMarks = 100;
    studentData.forEach((subject) => {
      totalMarks += subject.assignment + subject.lab + subject.finalExam;
    });

    return { totalMarks, passed: totalMarks >= passingMarks };
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={6} sx={{ padding: 4, marginTop: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Examination Results
        </Typography>

        {/* Student Selection Dropdown */}
        <Grid container justifyContent="center" sx={{ marginBottom: 2 }}>
          <FormControl sx={{ width: 300 }}>
            <Select
              value={selectedStudent}
              onChange={(e) => setSelectedStudent(e.target.value)}
              displayEmpty
            >
              <MenuItem value="" disabled>
                -- Select Student --
              </MenuItem>
              {Object.keys(resultsData).map((student, index) => (
                <MenuItem key={index} value={student}>
                  {student}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Display Result Table if a student is selected */}
        {selectedStudent && (
          <>
            <TableContainer component={Paper} sx={{ marginTop: 2 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <strong>Subject</strong>
                    </TableCell>
                    <TableCell align="center">
                      <strong>Assignment (20)</strong>
                    </TableCell>
                    <TableCell align="center">
                      <strong>Lab Test (25)</strong>
                    </TableCell>
                    <TableCell align="center">
                      <strong>Final Exam (55)</strong>
                    </TableCell>
                    <TableCell align="center">
                      <strong>Total (100)</strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {resultsData[selectedStudent].map((result, index) => {
                    const total =
                      result.assignment + result.lab + result.finalExam;
                    return (
                      <TableRow key={index}>
                        <TableCell>{result.subject}</TableCell>
                        <TableCell align="center">
                          {result.assignment}
                        </TableCell>
                        <TableCell align="center">{result.lab}</TableCell>
                        <TableCell align="center">{result.finalExam}</TableCell>
                        <TableCell align="center">{total}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Final Result Status */}
            <Box sx={{ textAlign: "center", marginTop: 3 }}>
              {(() => {
                const { totalMarks, passed } = calculateResult(
                  resultsData[selectedStudent]
                );
                return passed ? (
                  <>
                    <CheckCircleIcon sx={{ fontSize: 50, color: "green" }} />
                    <Typography
                      variant="h5"
                      sx={{ color: "green", fontWeight: "bold" }}
                    >
                      🎉 Congratulations! You Passed!
                    </Typography>
                    <Typography variant="h6">
                      Total Marks: {totalMarks}
                    </Typography>
                  </>
                ) : (
                  <>
                    <CancelIcon sx={{ fontSize: 50, color: "red" }} />
                    <Typography
                      variant="h5"
                      sx={{ color: "red", fontWeight: "bold" }}
                    >
                      😢 Sorry! You Failed!
                    </Typography>
                    <Typography variant="h6">
                      Total Marks: {totalMarks}
                    </Typography>
                  </>
                );
              })()}
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default ExaminationResult;
