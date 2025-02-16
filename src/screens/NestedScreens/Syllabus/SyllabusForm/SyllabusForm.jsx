import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {
  Paper,
  Typography,
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
import { db } from "../../../../FirebaseConfig";
import { useNavigate } from "react-router-dom";

const SyllabusInfo = [
  {
    nameOfCourse: "Web And App Development",
    moduleA: [
      "HTML",
      "CSS",
      "JavaScript",
      "Flex",
      "Bootstrap",
      "Firebase",
      "Git",
    ],
    moduleB: [
      "EcmaScript",
      "React Js",
      "Node Js",
      "MongoDB",
      "React Native",
      "Next Js",
      "TypeScript",
    ],
    InstructorName: "Sir Faraz",
  },
  {
    nameOfCourse: "Data Science",
    moduleA: ["Python", "R", "SQL", "Tableau", "Power BI", "Excel", "Pcsharp"],
    moduleB: [
      "Machine Learning",
      "Data Mining",
      "Data Analysis",
      "Data Visualization",
      "Data Science",
    ],
    InstructorName: "Sir Hamza",
  },
  {
    nameOfCourse: "Artificial Intelligence",
    moduleA: ["Python", "R", "SQL", "Tableau", "Power BI"],
    moduleB: [
      "Machine Learning",
      "Data Mining",
      "Data Analysis",
      "Data Visualization",
    ],
    InstructorName: "Sir Osama",
  },
  {
    nameOfCourse: "Digital Marketing",
    moduleA: [
      "Google Analytics",
      "Google Ads",
      "Facebook Ads",
      "Instagram Ads",
      "Twitter Ads",
    ],
    moduleB: [
      "SEO",
      "Content Marketing",
      "Email Marketing",
      "Influencer Marketing",
      "Social Media Marketing",
    ],
    InstructorName: "Sir Ali",
  },
];

const SyllabusForm = () => {
  const [subject, setSubject] = useState({
    courseName: "",
    moduleA: [],
    moduleB: [],
    instructorName: "",
    subjectCode: "",
    semester: "",
    department: "",
  });

  const [selectedCourse, setSelectedCourse] = useState(""); // Holds selected course name

  const navigate = useNavigate();

  const handleCourseChange = (event) => {
    const selectedName = event.target.value;
    setSelectedCourse(selectedName);

    // Find the full course object
    const selectedCourseData = SyllabusInfo.find(
      (course) => course.nameOfCourse === selectedName
    );

    if (selectedCourseData) {
      setSubject({
        ...subject,
        courseName: selectedCourseData.nameOfCourse,
        moduleA: selectedCourseData.moduleA,
        moduleB: selectedCourseData.moduleB,
        instructorName: selectedCourseData.InstructorName,
      });
    }
  };

  const addSub = async () => {
    try {
      const docRef = await addDoc(collection(db, "syllabus"), subject);
      console.log("Document written with ID: ", docRef.id);
      navigate("/dashboard/syllabusList");
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
          Syllabus for Particular Course
        </Typography>

        <Grid container spacing={2}>
          {/* Course Dropdown */}
          <Grid item xs={12} sm={6}>
            <FormLabel>Select Course</FormLabel>
            <Select
              fullWidth
              value={selectedCourse}
              onChange={handleCourseChange}
            >
              <MenuItem value="">Select Course</MenuItem>
              {SyllabusInfo.map((course, index) => (
                <MenuItem key={index} value={course.nameOfCourse}>
                  {course.nameOfCourse}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          {/* Instructor Name (Auto-Filled) */}
          <Grid item xs={12} sm={6}>
            <FormLabel>Instructor Name</FormLabel>
            <TextField fullWidth value={subject.instructorName} disabled />
          </Grid>

          {/* Module A (Auto-Filled) */}
          <Grid item xs={12} sm={6}>
            <FormLabel>Module A</FormLabel>
            <TextField fullWidth value={subject.moduleA.join(", ")} disabled />
          </Grid>

          {/* Module B (Auto-Filled) */}
          <Grid item xs={12} sm={6}>
            <FormLabel>Module B</FormLabel>
            <TextField fullWidth value={subject.moduleB.join(", ")} disabled />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              sx={{ width: "100%", backgroundColor: "#007763" }}
              variant="contained"
              onClick={addSub}
            >
              Add Subject
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </Paper>
  );
};

export default SyllabusForm;
