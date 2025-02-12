import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../../../FirebaseConfig';
import { styled } from '@mui/material/styles';
// import CustomizedTables from '../../../../components/Table/Table';
import { Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: " #007763",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StudentList = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    getDataofStudent();
  }, []);

  const getDataofStudent = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "students"));

      // Convert querySnapshot to an array of objects
      const allData = querySnapshot.docs.map(doc => ({
        id: doc.id,  // Add document ID
        ...doc.data() // Spread the document data
      }));

      setStudentData(allData);
      console.log("Fetched Students:", allData);
    } catch (error) {
      console.log("Error fetching students:", error);
    }
  };

  return (
    <div>
      <h2>Student List</h2>
   
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700, color:"red"}} aria-label="customized table">
        <TableHead >
          <TableRow sx={{color :"red"}} >
            <StyledTableCell>No.</StyledTableCell>
            <StyledTableCell align="center">User Id</StyledTableCell>
            <StyledTableCell align="center">Student Name</StyledTableCell>
            <StyledTableCell align="center">Father Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Course Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentData.map((e,i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
               {i}
              </StyledTableCell>
              <StyledTableCell align="center">{e.id}</StyledTableCell>
              <StyledTableCell align="center">{e.userName}</StyledTableCell>
              <StyledTableCell align="center">{e.fatherName}</StyledTableCell>
              <StyledTableCell align="center">{e.email}</StyledTableCell>
              <StyledTableCell align="center">{e.course}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default StudentList;
