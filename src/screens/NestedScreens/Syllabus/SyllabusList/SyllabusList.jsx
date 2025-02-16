import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../../FirebaseConfig";
import { Card, CardContent, Typography, Grid, Container } from "@mui/material";

const SyllabusList = () => {
  const [syllabusData, setSyllabusData] = useState([]);

  useEffect(() => {
    getDataofSyllabus();
  }, []);

  const getDataofSyllabus = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "syllabus"));

      const allData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setSyllabusData(allData);
      console.log("Fetched Syllabus:", allData);
    } catch (error) {
      console.log("Error fetching syllabus:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Syllabus for All Courses
      </Typography>

      <Grid container spacing={3}>
        {syllabusData.map((subject) => (
          <Grid item xs={12} sm={6} md={4} key={subject.id}>
            <Card elevation={5} sx={{ backgroundColor: "#f9f9f9", p: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  Course Name: {subject.nameOfCourse}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Instructor Name:</strong> {subject.InstructorName}
                </Typography>

                {/* Dynamically Display All Modules */}
                {Object.keys(subject).map((key) => {
                  if (key.startsWith("module")) {
                    return (
                      <div key={key}>
                        <Typography variant="subtitle1" sx={{ mt: 2 }}>
                          <strong>{key.replace(/module/, "Module ")} (Topics Name):</strong>
                        </Typography>
                        <ul>
                          {Array.isArray(subject[key]) &&
                            subject[key].map((topic, index) => (
                              <li key={index} style={{ fontSize: "14px" }}>
                                {topic}
                              </li>
                            ))}
                        </ul>
                      </div>
                    );
                  }
                  return null;
                })}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SyllabusList;
