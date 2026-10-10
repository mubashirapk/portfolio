export const initialPortfolioData = {
  profile: {
    name: "Mubashira PK",
    title: "Aspiring Data Analyst",
    tagline: "Turning Raw Data Into Meaningful Insights.",
    headline: "Turning Data Into Meaningful Insights.",
    heroDescription: "I am an aspiring Data Analyst passionate about working with data, discovering patterns, and transforming raw information into meaningful insights using Python, SQL, and Excel.",
    summary: "I am an aspiring Data Analyst passionate about exploring data, identifying patterns, and transforming raw information into meaningful insights. I am developing my analytical and technical skills using Python, SQL, Microsoft Excel, and data visualization tools.",
    statusLabel: "Exploring Data | Learning Every Day",
    profileImage: "/mubashira.png",
    initials: "MP",
    careerGoal: "To obtain an entry-level Data Analyst position where I can apply my knowledge of Python, SQL, Excel, and data analysis techniques to solve business problems, generate meaningful insights, and support informed decision-making while continuously improving my skills."
  },
  contact: {
    phone: "8086794682",
    email: "mubashirapk2004@gmail.com",
    linkedin: "https://www.linkedin.com/in/mubashira-pk-data-analyst?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "", // Editable
    location: "Kerala, India"
  },
  about: {
    heading: "About Me",
    paragraphs: [
      "I am Mubashira PK, a BCA student currently pursuing my 5th semester. I am passionate about Data Analytics and interested in transforming raw data into meaningful insights. I am developing my technical skills in Python, SQL, and Microsoft Excel to analyze data, identify patterns, and support data-driven decision-making.",
      "My goal is to begin my career as a Data Analyst and apply my analytical and technical skills to real-world datasets."
    ],
    cards: [
      { id: "c1", label: "Education", value: "BCA (Bachelor of Computer Applications)", sub: "Undergraduate Program", icon: "GraduationCap" },
      { id: "c2", label: "Current Semester", value: "5th Semester", sub: "Currently Pursuing", icon: "Calendar" },
      { id: "c3", label: "Career Interest", value: "Data Analytics", sub: "Insights & Pattern Discovery", icon: "LineChart" },
      { id: "c4", label: "Learning Focus", value: "Python, SQL, Excel & Power BI", sub: "Analytical Toolkit", icon: "Binary" }
    ]
  },
  dataJourney: [
    {
      step: 1,
      title: "DATA COLLECTION",
      shortDesc: "Gathering raw structured & semi-structured information",
      detail: "Identifying relevant data sources, tabular datasets, CSV/Excel imports, and database schemas required for investigation.",
      tools: ["CSV Files", "SQL Queries", "Raw Datasets"],
      icon: "Database"
    },
    {
      step: 2,
      title: "DATA CLEANING",
      shortDesc: "Filtering noise, handling nulls & formatting",
      detail: "Detecting missing values, removing duplicates, standardizing data types, and using Power Query or Pandas for tidy formats.",
      tools: ["Pandas", "Power Query", "Excel Formulas"],
      icon: "Filter"
    },
    {
      step: 3,
      title: "DATA ANALYSIS",
      shortDesc: "Querying, calculating & exploratory analysis (EDA)",
      detail: "Grouping data, calculating summary statistics (mean, median, count), applying joins, and discovering underlying correlations.",
      tools: ["SQL Joins", "NumPy", "Aggregate Functions"],
      icon: "Binary"
    },
    {
      step: 4,
      title: "VISUALIZATION",
      shortDesc: "Crafting charts, trends & visual stories",
      detail: "Plotting distributions, bar charts, trend lines, and clear graphical representations using Matplotlib to make data intuitive.",
      tools: ["Matplotlib", "Excel Charts", "Visual Storytelling"],
      icon: "BarChart3"
    },
    {
      step: 5,
      title: "INSIGHTS",
      shortDesc: "Empowering informed decision-making",
      detail: "Synthesizing findings into clear takeaways, identifying high-impact patterns, and communicating actionable conclusions.",
      tools: ["Actionable Takeaways", "Pattern Recognition", "Reporting"],
      icon: "Lightbulb"
    }
  ],
  skills: [
    {
      id: "cat-1",
      category: "Programming and Libraries",
      items: [
        { id: "sk-1", name: "Python", desc: "Core language for data exploration, scripting, and analytical automation.", icon: "Code2" },
        { id: "sk-2", name: "Pandas", desc: "DataFrames, data transformation, handling null values, and grouping.", icon: "Table" },
        { id: "sk-3", name: "NumPy", desc: "Numerical computing, multi-dimensional array operations, and math functions.", icon: "Binary" }
      ]
    },
    {
      id: "cat-2",
      category: "Database and Querying",
      items: [
        { id: "sk-4", name: "SQL", desc: "Relational database querying and structured data extraction.", icon: "Database" },
        { id: "sk-5", name: "SQL Queries", desc: "SELECT, WHERE, GROUP BY, HAVING, and ORDER BY clauses.", icon: "FileCode" },
        { id: "sk-6", name: "Joins", desc: "INNER, LEFT, RIGHT, and FULL joins for multi-table relationships.", icon: "GitMerge" },
        { id: "sk-7", name: "Aggregate Functions", desc: "COUNT, SUM, AVG, MIN, MAX calculations for summary metrics.", icon: "Sigma" }
      ]
    },
    {
      id: "cat-3",
      category: "Microsoft Excel",
      items: [
        { id: "sk-8", name: "Data Cleaning", desc: "Deduplication, formatting validation, text manipulation, and consistency.", icon: "Sparkles" },
        { id: "sk-9", name: "Excel Formulas", desc: "Logical formulas (IF, AND, OR), arithmetic calculations, and date functions.", icon: "SquareFunction" },
        { id: "sk-10", name: "Lookup Functions", desc: "XLOOKUP, VLOOKUP, and INDEX/MATCH for referencing related datasets.", icon: "Search" },
        { id: "sk-11", name: "Power Query", desc: "ETL extraction, transformation, column unpivoting, and automated pipeline.", icon: "Workflow" }
      ]
    },
    {
      id: "cat-4",
      category: "Data Analysis and Visualization",
      items: [
        { id: "sk-12", name: "Exploratory Data Analysis (EDA)", desc: "Analyzing dataset distributions, outliers, and fundamental characteristics.", icon: "BarChart3" },
        { id: "sk-13", name: "Data Exploration", desc: "Initial inspection, summary statistics, and assessing data cleanliness.", icon: "Compass" },
        { id: "sk-14", name: "Pattern Identification", desc: "Spotting trends, correlations, anomalies, and behavioral tendencies.", icon: "TrendingUp" },
        { id: "sk-15", name: "Insight Generation", desc: "Synthesizing analytical observations into clear conclusions.", icon: "Lightbulb" },
        { id: "sk-16", name: "Matplotlib", desc: "Plotting histograms, scatter charts, bar charts, and subplots.", icon: "PieChart" },
        { id: "sk-17", name: "Data Visualization", desc: "Designing clean, uncluttered visual presentations for clear understanding.", icon: "LineChart" }
      ]
    }
  ],
  currentlyLearning: [
    {
      id: "cl-1",
      name: "Power BI",
      desc: "Interactive business intelligence dashboards, data modeling, DAX measures, and report design.",
      icon: "BarChart4",
      tag: "Learning in progress"
    },
    {
      id: "cl-2",
      name: "Statistics",
      desc: "Descriptive statistics, mean/median/mode, variance, standard deviation, and probability concepts.",
      icon: "Sigma",
      tag: "Learning in progress"
    },
    {
      id: "cl-3",
      name: "Advanced Data Analysis",
      desc: "Multivariate dataset exploration, feature correlations, and advanced exploratory methodologies.",
      icon: "Cpu",
      tag: "Learning in progress"
    },
    {
      id: "cl-4",
      name: "Data Visualization",
      desc: "Visual hierarchy, effective chart selection, design aesthetics, and user-centric reporting.",
      icon: "Palette",
      tag: "Learning in progress"
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Student Performance Analysis Using Python",
      category: "Data Analytics",
      tools: ["Python", "Pandas", "Matplotlib"],
      status: "Completed",
      description: "Analyzed student performance data to explore marks, identify performance patterns, and communicate findings through data visualization.",
      keyActivities: [
        "Explored student performance data across various subjects and test components.",
        "Organized and analyzed datasets using Pandas DataFrames and grouping operations.",
        "Examined marks and performance patterns across study hours and attendance.",
        "Created visualizations including distribution plots and score comparisons using Matplotlib.",
        "Presented findings in an understandable format for clear educational insights."
      ],
      githubUrl: "",
      liveUrl: "",
      image: null
    },
    {
      id: "proj-2",
      title: "Data Cleaning and Analysis Using Excel",
      category: "Data Analytics",
      tools: ["Microsoft Excel", "Power Query"],
      status: "Completed",
      description: "Cleaned and organized raw data, applied Excel formulas and lookup functions, and used Power Query to prepare data for analysis.",
      keyActivities: [
        "Organized raw multi-source datasets into structured analytical sheets.",
        "Cleaned data for improved consistency by resolving blanks, duplicates, and type mismatches.",
        "Applied Excel formulas for conditional logic and calculations.",
        "Used lookup functions (XLOOKUP, VLOOKUP) to cross-reference dataset records.",
        "Transformed data using Power Query for repeatable, automated preparation.",
        "Analyzed data to identify useful information and summary metrics."
      ],
      githubUrl: "",
      liveUrl: "",
      image: null
    },
    {
      id: "proj-3",
      title: "Upcoming Data Analytics Project",
      category: "Coming Soon",
      tools: ["Python", "SQL", "Data Exploration"],
      status: "Coming Soon",
      description: "An upcoming project focused on exploring datasets, applying analytical techniques, and communicating findings through visualizations.",
      keyActivities: [
        "Formulating exploratory questions on real-world datasets.",
        "Executing SQL queries and data extraction workflows.",
        "Conducting rigorous exploratory data analysis (EDA).",
        "Synthesizing actionable observations and visual summaries."
      ],
      githubUrl: "",
      liveUrl: "",
      image: null
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Add college or university name when provided",
      academicStatus: "Currently pursuing 5th Semester",
      highlights: "Developing strong foundations in Computer Science, Database Management Systems (DBMS), Programming logic, and analytical methodologies."
    }
  ],
  certifications: [
    {
      id: "cert-1",
      name: "Python for Data Analysis",
      issuer: "", // Editable
      date: "",   // Editable
      verificationUrl: "", // Editable
      image: null
    }
  ],
  sampleDataShowcase: {
    title: "Turning Data Into Insights",
    subtitle: "Educational Sample Analytics Showcase",
    notice: "Sample educational exploration illustrating data transformation, chart plotting, and exploratory data analysis techniques.",
    students: [
      { id: "S101", subject: "Math & Analytics", hours: 14, score: 92, grade: "A+", attendance: "96%" },
      { id: "S102", subject: "Database Systems", hours: 11, score: 85, grade: "A", attendance: "92%" },
      { id: "S103", subject: "Python Programming", hours: 16, score: 95, grade: "A+", attendance: "98%" },
      { id: "S104", subject: "Data Structures", hours: 8, score: 76, grade: "B+", attendance: "84%" },
      { id: "S105", subject: "Statistics Basics", hours: 12, score: 88, grade: "A", attendance: "90%" },
      { id: "S106", subject: "Excel Modeling", hours: 10, score: 82, grade: "B+", attendance: "88%" }
    ],
    subjectAverages: [
      { subject: "Python Prog.", avg: 91, color: "#2563eb" },
      { subject: "Database (SQL)", avg: 85, color: "#0891b2" },
      { subject: "Excel Analytics", avg: 84, color: "#059669" },
      { subject: "Math Analytics", avg: 88, color: "#7c3aed" },
      { subject: "Data Structures", avg: 78, color: "#d97706" }
    ],
    gradeDistribution: [
      { grade: "A+ (90-100)", count: 2, percent: 33, color: "#2563eb" },
      { grade: "A (80-89)", count: 2, percent: 33, color: "#0891b2" },
      { grade: "B+ (70-79)", count: 2, percent: 34, color: "#059669" }
    ]
  }
};
