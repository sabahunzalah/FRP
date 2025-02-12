import InboxIcon from "@mui/icons-material/MoveToInbox";
const NAVIGATION = [
    {
      segment: "students",
      title: "Student",
      icon: <InboxIcon />,
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
      icon: <InboxIcon />,
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
      icon: <InboxIcon />,
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
      icon: <InboxIcon />,
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
      icon: <InboxIcon />,
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
      icon: <InboxIcon />,
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
      icon: <InboxIcon />,
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
      icon: <InboxIcon />,
      children: [
        {
          segment: "admissionForm",
          title: "Admission Form",
          icon: <InboxIcon />,
          route: "admissionForm",
        },
        
      ],
    },
    {
      segment: "examination",
      title: "Examination ",
      icon: <InboxIcon />,
      children: [
        {
          segment: "examinationForm",
          title: "Examination Form",
          icon: <InboxIcon />,
          route: "examinationForm",
        },
        {
          segment: "examSchedule",
          title: "Exam Schedule",
          icon: <InboxIcon />,
          route: "examShedule",
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