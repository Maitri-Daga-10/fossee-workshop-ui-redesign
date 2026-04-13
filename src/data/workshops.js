export const workshops = [
  {
    id: 1,
    mode: "Online",
    level: "Beginner",
    title: "Python for Scientific Computing",
    date: "18 Apr 2026",
    description:
      "Learn Python basics with hands-on examples used in scientific computing and academic projects.",
    seats: 60,
    registered: 42,
    duration: "2 days"
  },
  {
    id: 2,
    mode: "Hybrid",
    level: "Intermediate",
    title: "OpenFOAM for CFD Applications",
    date: "22 Apr 2026",
    description:
      "Understand CFD workflows with guided practice sessions and real simulation examples.",
    seats: 40,
    registered: 26,
    duration: "1 day"
  },
  {
    id: 3,
    mode: "Online",
    level: "Beginner",
    title: "LaTeX for Academic Writing",
    date: "25 Apr 2026",
    description:
      "Create clean reports and research papers using LaTeX with practical formatting techniques.",
    seats: 80,
    registered: 51,
    duration: "1 day"
  }
];
export const pendingRequests = [
  {
    college: 'VIT Bhopal University',
    requestedBy: 'Student Coordinator',
    date: '20 Apr 2026',
    status: 'Waiting for instructor approval'
  },
  {
    college: 'NIT Surat',
    requestedBy: 'Faculty Coordinator',
    date: '24 Apr 2026',
    status: 'Pending logistics confirmation'
  },
  {
    college: 'IISER Pune',
    requestedBy: 'Department Team',
    date: '02 May 2026',
    status: 'Postponement under review'
  }
];

export const stats = [
  { label: 'Upcoming workshops', value: '18' },
  { label: 'Pending requests', value: '07' },
  { label: 'Student-first screens', value: '100%' },
  { label: 'Average form steps reduced', value: '40%' }
];
