import InboxIcon from "@mui/icons-material/MoveToInbox";
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ClassIcon from '@mui/icons-material/Class';
import AddCardIcon from '@mui/icons-material/AddCard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
const NAVIGATION = [
    {
      segment: "students",
      title: "Student",
      icon: <PersonIcon />,
      children: [  
        {
          segment: "addStudent",
          title: "Add Student",
          icon: <InboxIcon />,
          route: "addStudent",
        },
        {
          segment: "studentList",
          title: "Student List",
          icon: <InboxIcon />,
          route: "studentList",
        },
        {
          segment: "transferStudent",
          title: "Transfer Student",
          icon: <InboxIcon />,
          route: "transferStudent",
        },
      ],
    },
    {
      segment: "teacher",
      title: "Teacher",
      icon: <PersonIcon />,
      children: [
        {
          segment: "addTeacher",
          title: "Add Teacher",
          icon: <InboxIcon />,
          route: "addTeacher",
        },
        {
          segment: "teacherList",
          title: "Teacher List",
          icon: <InboxIcon />,
          route: "teacherList",
        },
        {
          segment: "teacherAllocation",
          title: "Teacher Allocation",
          icon: <InboxIcon />,
          route: "teacherAllocation",
        },
      ],
    },
    {
      segment: "school",
      title: "School",
      icon: <SchoolIcon />,
      children: [
        {
          segment: "registration",
          title: "Registration",
          icon: <InboxIcon />,
          route: "registration",
        },
      ],
    },
    {
      segment: "syllabus",
      title: "Syllabus",
      icon: < MenuBookIcon/>,
      children: [
        {
          segment: "syllabusForm",
          title: "Syllabus Form",
          icon: <InboxIcon />,
          route: "syllabusForm",
        },
        {
          segment: "syllabusList",
          title: "Syllabus List",
          icon: <InboxIcon />,
          route: "syllabusList",
        },
      ],
    },
    {
      segment: "subject",
      title: "Subject",
      icon: <LibraryBooksIcon/>,
      children: [
        {
          segment: "addSubject",
          title: "Add Subject",
          icon: <InboxIcon />,
          route: "addSubject",
        },
        {
          segment: "subjectList",
          title: "Subject List",
          icon: <InboxIcon />,
          route: "subjectList",
        },
      ],
    },
    {
      segment: "class",
      title: "Class",
      icon: <ClassIcon />,
      children: [
        {
          segment: "classForm",
          title: "Class Form",
          icon: <InboxIcon />,
          route: "classForm",
        },
        {
          segment: "classList",
          title: "Class List",
          icon: <InboxIcon />,
          route: "classList",
        },
      ],
    },
    {
      segment: "fees",
      title: "Fees",
      icon: <AddCardIcon />,
      children: [
        {
          segment: "feeStructure",
          title: "Fees Structure",
          icon: <InboxIcon />,
          route: "feesStructure",
        },
        {
          segment: "feesSubmission",
          title: "Fees Submission",
          icon: <InboxIcon />,
          route: "feesSubmission",
        },
        {
          segment: "feeVoucher",
          title: "Fees Voucher",
          icon: <InboxIcon />,
          route: "feeVoucher",
        },
      ],
    },
    {
      segment: "admission",
      title: "Admission ",
      icon: <PersonAddIcon />,
      children: [
        {
          segment: "admissionForm",
          title: "Admission Form",
          icon: <InboxIcon />,
          route: "admissionForm",
        },
        {
          segment: "admissionList",
          title: "Admission List",
          icon: <InboxIcon />,
          route: "admissionList",
        },
        
      ],
    },
    {
      segment: "examination",
      title: "Examination ",
      icon: <ContentPasteIcon />,
      children: [
        {
          segment: "examinationForm",
          title: "Examination Form",
          icon: <InboxIcon />,
          route: "examinationForm",
        },
        {
          segment: "examinationSchedule",
          title: "Exam Schedule",
          icon: <InboxIcon />,
          route: "examinationShedule",
        },
        {
          segment: "examResult",
          title: "Exam Result",
          icon: <InboxIcon />,
          route: "examResult",
        },
        
      ],
    },
  ];
  export default NAVIGATION;