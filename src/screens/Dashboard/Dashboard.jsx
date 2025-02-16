
import React, { useState } from "react";
import {
  Box,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Button,
} from "@mui/material";
import { Menu, ExpandLess, ExpandMore } from "@mui/icons-material";
import { Route, Routes, useNavigate } from "react-router-dom";
import StudentList from "../NestedScreens/Students/StudentList/StudentList";
import TransferStudent from "../NestedScreens/Students/transferStudent/TransferStudent";
import CreateStudent from "../NestedScreens/Students/Create-Student/CreateStudent";
import CreateTeacher from "../NestedScreens/Teachers/CreateTeacher/CreateTeacher";
import TeacherList from "../NestedScreens/Teachers/TeacherList/TeacherList";
import TeacherAllocation from "../NestedScreens/Teachers/TeacherAllocation/TeacherAllocation";
import AddSubject from "../NestedScreens/Subjects/AddSubject/AddSubject";
import SubjectList from "../NestedScreens/Subjects/SubjectList/SubjectList";
import ClassForm from "../NestedScreens/classes/ClassForm/ClassForm";
import ClassList from "../NestedScreens/classes/ClassList/ClassList";
import FeeStructure from "../NestedScreens/fees/FeeStructure/FeeStructure";
import FeeSubmission from "../NestedScreens/fees/FeeSubmission/FeeSubmission";
import FeeVoucher from "../NestedScreens/fees/FeeVoucher/FeeVoucher";
import AdmissionForm from "../NestedScreens/Admission/Admission";
import SchoolRegistration from "../NestedScreens/school/Registration/Registration";
import NAVIGATION from "./Data";
import SyllabusForm from "../NestedScreens/Syllabus/SyllabusForm/SyllabusForm";
import SyllabusList from "../NestedScreens/Syllabus/SyllabusList/SyllabusList";
import ExaminationForm from "../NestedScreens/Exams/ExaminationForm/ExaminationForm";
import ExaminationSchedule from "../NestedScreens/Exams/ExaminationSchedule/ExaminationSchedule";
import ExamResult from "../NestedScreens/Exams/ExamResult/ExamResult";
import AdmissionList from "../NestedScreens/Admission/AdmissionList";
import HomeScreen from "../NestedScreens/HomeScreen/HomeScreen";

const drawerWidth = 240;
export default function LmsDashboard() {
  const [openSections, setOpenSections] = useState({});
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const isDefaultPage = location.pathname === "/dashboard";

  // Toggle function for nested items
  const handleToggle = (segment) => {
    setOpenSections((prev) => ({
      ...prev,
      [segment]: !prev[segment],
    }));
  };

  // Function to toggle drawer open/close
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const logOut = () =>{
    localStorage.clear();
    navigate('/')
  }

  const drawer = (
    <Box sx={{ width: drawerWidth,background: "linear-gradient(to right, #007763,#f0f8f5)", height:"auto", paddingTop:"30px",paddingBottom:"50px" }}>
      <Toolbar />
      <List>
        {NAVIGATION.map((item) => (
          <React.Fragment key={item.segment}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleToggle(item.segment)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
                {item.children ? (openSections[item.segment] ? <ExpandLess /> : <ExpandMore />) : null}
              </ListItemButton>
            </ListItem>
            {item.children && (
              <Collapse in={openSections[item.segment]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ pl: 4 }}>
                  {item.children.map((child) => (
                    <ListItem key={child.segment} disablePadding>
                      <ListItemButton onClick={() => navigate(`/dashboard/${child.route}`)}>
                        <ListItemText primary={child.title} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 ,backgroundColor:" #007763"}}>
        <Toolbar sx={{display:"flex",justifyContent:"space-between ", alignItems:"center"}}>
          {/* Menu Button for Mobile */}
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            LMS Dashboard
          </Typography>
          <Button variant="contained" sx={{backgroundColor:"white", color:" #007763", fontWeight:"600"}} onClick={logOut}>Logout</Button>
        </Toolbar>
      </AppBar>

      {/* Permanent Drawer for Large Screens */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          backgroundColor:" #007763",
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
        open
      >
        {drawer}
      </Drawer>

      {/* Temporary Drawer for Mobile */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, height:"100vh"}}>
        <Toolbar />
        {isDefaultPage ? (
        <HomeScreen /> 
      ) : (
        <Routes>
//           <Route path="studentList" element={<StudentList />} />
//           <Route path="addStudent" element={<CreateStudent />} />
//           <Route path="transferStudent" element={<TransferStudent />} />
//           <Route path="addTeacher" element={<CreateTeacher />} />
//           <Route path="teacherList" element={<TeacherList />} />
//           <Route path="teacherAllocation" element={<TeacherAllocation />} />
//           <Route path="registration" element={<SchoolRegistration />} />
//           <Route path="addSubject" element={<AddSubject />} />
//           <Route path="subjectList" element={<SubjectList />} />
//           <Route path="classForm" element={<ClassForm />} />
//           <Route path="classList" element={<ClassList />} />
//           <Route path="feesStructure" element={<FeeStructure />} />
//           <Route path="feesSubmission" element={<FeeSubmission />} />
//           <Route path="feeVoucher" element={<FeeVoucher />} />
//           <Route path="admissionForm" element={<AdmissionForm />} />
//           <Route path="admissionList" element={<AdmissionList />} />
//           <Route path="syllabusForm" element={<SyllabusForm />} />
//           <Route path="syllabusList" element={<SyllabusList />} />
//           <Route path="examinationForm" element={<ExaminationForm />} />
//           <Route path="examinationShedule" element={<ExaminationSchedule />} />
//           <Route path="examResult" element={<ExamResult />} />
//         
//         </Routes>
      )}
      </Box>
    </Box>
  );
}
