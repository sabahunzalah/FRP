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
} from "@mui/material";
import { db } from "../../../../FirebaseConfig";
import { useNavigate } from "react-router-dom";

const AddSubject = () => {
  const [subject, setSubject] = useState({
    subjectCode: "",
    subjectName: "",
    instructorName: "",
    gradeLevel: "",
    semester: "",
    department: "",
  });
  const navigate  = useNavigate()
const addSub =async () =>{
  try {
    const docRef = await addDoc(collection(db, "subjects"),subject);
    console.log("Document written with ID: ", docRef.id);
    console.log("Document  ", docRef);
    navigate("/dashboard/subjectList");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

  return (
    <Paper elevation={20} sx={{ padding: 4, maxWidth: "800px", margin: "auto" }}>
      <FormControl fullWidth>
        <Typography sx={{ marginBottom: 2 }} variant="h4" align="center">
          Add Subject
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormLabel>Subject Code</FormLabel>
            <TextField fullWidth type="text" name="subjectCode"  placeholder=" e.g 001" onChange={(e)=>{
              setSubject({...subject, subjectCode: e.target.value});
            }}/>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormLabel>Subject Name</FormLabel>
            <TextField fullWidth type="text" name="subjectName" onChange={(e)=>{
              setSubject({...subject, subjectName: e.target.value});
            }} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormLabel>Instructor Name</FormLabel>
            <TextField fullWidth type="text" name="instructorName"   onChange={(e)=>{
              setSubject({...subject, instructorName: e.target.value});
            }}/>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormLabel>Grade Level</FormLabel>
            <TextField fullWidth type="text" name="gradeLevel" onChange={(e)=>{
              setSubject({...subject, gradeLevel: e.target.value});
            }} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormLabel>Semester</FormLabel>
            <TextField fullWidth type="text" name="semester" onChange={(e)=>{
              setSubject({...subject, semester: e.target.value});
            }} />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <FormLabel>Department</FormLabel>
            <TextField fullWidth type="text" name="department" onChange={(e)=>{
              setSubject({...subject, department: e.target.value});
            }} />
          </Grid>

          <Grid item xs={12} sm={12}>
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

export default AddSubject;
