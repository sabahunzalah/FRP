import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../../FirebaseConfig";
import { Card, CardContent, Typography, Grid, Container } from "@mui/material";

const ClassList = () => {
  const [students, setStudents] = useState([]);
  const [groupedData, setGroupedData] = useState({});

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "classData"));
      const studentData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Group students by course
      const grouped = studentData.reduce((acc, student) => {
        if (!acc[student.course]) {
          acc[student.course] = [];
        }
        acc[student.course].push(student);
        return acc;
      }, {});

      setStudents(studentData);
      setGroupedData(grouped);
      console.log("Fetched Students:", grouped);
    } catch (error) {
      console.log("Error fetching students:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Enrolled Students by Course
      </Typography>

      <Grid container spacing={3}>
        {Object.entries(groupedData).map(([course, students]) => (
          <Grid item xs={12} sm={6} md={4} key={course}>
            <Card elevation={5} sx={{ backgroundColor: "#f9f9f9", p: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Course: {course}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Total Students Enrolled:</strong> {students.length}
                </Typography>

                {students.map((student) => (
                  <Typography key={student.id} variant="body2">
                    {student.StudentName} - {student.email}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ClassList;
