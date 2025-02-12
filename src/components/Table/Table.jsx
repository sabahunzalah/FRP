import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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


export default function CustomizedTables({studentdata}) {
    console.log({studentdata})
  return (
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
          {studentdata.map((e,i) => (
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
  );
}
