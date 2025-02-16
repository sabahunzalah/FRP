import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../../../FirebaseConfig';
import { Card, CardContent, Typography, Grid, Container, Paper } from '@mui/material';

const SubjectList = () => {
  const [subjectData, setSubjectData] = useState([]);

  useEffect(() => {
    getDataofSubject();
  }, []);

  const getDataofSubject = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "subjects"));

      const allData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setSubjectData(allData);
      console.log("Fetched Subjects:", allData);
    } catch (error) {
      console.log("Error fetching subjects:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Subject List
      </Typography>

      <Grid container spacing={3}>
        {subjectData.map((subject) => (
          <Grid item xs={12} sm={6} md={4} key={subject.id}>
            <Card sx={{ minHeight: 180, boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" color="primary">
                  {subject.subjectName}
                </Typography>
                <Typography variant="body1">
                  <strong>Subject Code:</strong> {subject.subjectCode}
                </Typography>
                <Typography variant="body2">
                  <strong>Instructor:</strong> {subject.instructorName}
                </Typography>
                <Typography variant="body2">
                  <strong>Grade Level:</strong> {subject.gradeLevel}
                </Typography>
                <Typography variant="body2">
                  <strong>Semester:</strong> {subject.semester}
                </Typography>
                <Typography variant="body2">
                  <strong>Department:</strong> {subject.department}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SubjectList;
