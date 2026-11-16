// Replace the empty strings with your real links and email before publishing.
export const profile = {
  name: "Naga Malleswari Gandham",
  shortName: "NM",
  role: "AI/ML Graduate · Full Stack Developer",
  location: "Guntur, Andhra Pradesh, India",
  email: "malli6314m@gmail.com", // Example: "yourname@example.com"
  github: "https://github.com/malleswarigandham04", // Example: "https://github.com/your-username"
  linkedin: "https://www.linkedin.com/in/naga-malleswari-gandham/", // Example: "https://www.linkedin.com/in/your-profile"
  resume: "/resume.pdf", // Put your PDF in the public folder using this exact filename.
  photo: "/profile.jpg", // Put your own professional photo in public/profile.jpg.
};

export const skills = [
  { group: "Programming", items: ["Python",, "JavaScript"] },
  { group: "Frontend", items: ["HTML5", "CSS3", "React.js"] },
  { group: "Backend & Database", items: ["SQL LITE"] },
  { group: "Tools & Foundations", items: ["Git", "GitHub", "VS Code", "OOP", "DBMS", "DSA"] },
];

export const projects = [
  {
    number: "01",
    title: "Online Payments Fraud Detection",
    category: "MACHINE LEARNING",
    description: "A machine learning project focused on identifying potentially fraudulent online payment transactions through data preparation, feature processing, model training, and evaluation.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest"],
    contribution: "Individual project completed during an internship with mentor guidance.",
    image: "/projects/fraud.svg",
    github: "",
    demo: "",
  },
  {
    number: "02",
    title: "House Price Prediction",
    category: "MACHINE LEARNING",
    description: "A regression project that uses housing data and machine learning techniques to estimate house prices after data cleaning and feature preparation.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest"],
    contribution: "Worked on data preprocessing, feature preparation, model training, and evaluation.",
    image: "/projects/housing.svg",
    github: "",
    demo: "",
  },
  {
    number: "03",
    title: "Blood Group Classification Using Fingerprint Images",
    category: "DEEP LEARNING · ACADEMIC PROJECT",
    description: "An academic project exploring fingerprint-image classification for blood-group categories using convolutional neural network architectures.",
    stack: ["Python", "Deep Learning", "CNN", "ResNet", "VGG-16", "Grad-CAM"],
    contribution: "Project work includes model exploration and visual explanation with Grad-CAM. Present results only after validating them experimentally.",
    image: "/projects/fingerprint.svg",
    github: "",
    demo: "",
  },
  {
    number: "04",
    title: "Travel Trip Web Application",
    category: "REACT · FRONTEND",
    description: "A React-based travel trip interface with a step-by-step details flow, including traveller details and date selection.",
    stack: ["React.js", "JavaScript", "HTML", "CSS", "Vite"],
    contribution: "Built the form flow and worked on component structure, validation, and interface behavior.",
    image: "/projects/travel.svg",
    github: "",
    demo: "",
  },
];

export const experience = [
  {
    role: "Machine Learning Intern",
    organization: "Plasmid Innovation Ltd",
    location: "Bengaluru, India",
    points: [
      "Worked on an individual Online Payments Fraud Detection machine learning project with mentor guidance.",
      "Performed data preprocessing and exploratory data analysis.",
      "Implemented and evaluated machine learning algorithms using Python and Scikit-learn.",
      "Participated in technical learning sessions and project discussions.",
    ],
  },
];

export const education = [
  {
    qualification: "Bachelor of Technology",
    institution: "RVR & JC College of Engineering",
    location: "Guntur, Andhra Pradesh",
    specialization: "Add the exact branch name shown on your degree certificate",
    year: "Add graduation year",
  },
];

export const achievements = [
  { title: "Throwball", detail: "Second Prize · College-level participation" },
  { title: "Tennis", detail: "First Prize · College-level participation" },
  { title: "Kabaddi", detail: "Participated during first year" },
  { title: "MAD Activity", detail: "Volunteered to teach Mathematics to students in Classes 6–10" },
  { title: "AP NAREDCO Property Show", detail: "Participated in the event" },
];