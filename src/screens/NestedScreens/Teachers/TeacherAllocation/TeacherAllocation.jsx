import React, { useEffect, useState } from "react";
import { db } from "../../../../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const TeacherAllocation = () => {
  const [teachersByCourse, setTeachersByCourse] = useState({});

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Teachers"));
        const teacherList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Group teachers by course
        const groupedTeachers = {};
        teacherList.forEach((teacher) => {
          if (!groupedTeachers[teacher.course]) {
            groupedTeachers[teacher.course] = [];
          }
          groupedTeachers[teacher.course].push(teacher);
        });

        setTeachersByCourse(groupedTeachers);
      } catch (error) {
        console.error("Error fetching teachers: ", error);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div style={{ maxWidth: "900px", margin: "auto", marginTop: "20px" }}>
      {Object.keys(teachersByCourse).length > 0 ? (
        Object.keys(teachersByCourse).map((course, index) => (
          <TableContainer key={index} component={Paper} sx={{ mb: 4, p: 2 }}>
            <Typography variant="h6" align="center" gutterBottom>
              {course}
            </Typography>
            {teachersByCourse[course].length > 0 ? (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>S.No</strong></TableCell>
                    <TableCell><strong>Teacher ID</strong></TableCell>
                    <TableCell><strong>Name</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {teachersByCourse[course].map((teacher, i) => (
                    <TableRow key={teacher.id}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{teacher.id}</TableCell>
                      <TableCell>{teacher.userName}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <Typography variant="body1" align="center" sx={{ p: 2, color: "gray" }}>
                No teacher allocated to this course
              </Typography>
            )}
          </TableContainer>
        ))
      ) : (
        <Typography variant="h6" align="center">
          No teacher data available
        </Typography>
      )}
    </div>
  );
};

export default TeacherAllocation;
