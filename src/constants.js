// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";

import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Experience Section Logo's
import vaultofcode from "./assets/company_logo/vault_of_code.png";
import kubairlogo from "./assets/company_logo/kubair.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/nit_logo.png";
import bsaLogo from "./assets/education_logo/bseb_logo.png";
import vpsLogo from "./assets/education_logo/galaxy_logo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/chatterbox.png";
import csprepLogo from "./assets/work_logo/ai.png";
import movierecLogo from "./assets/work_logo/weather.png";
import npmLogo from "./assets/work_logo/musicKit.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: vaultofcode,
    role: "Fullstack Developer",
    company: "VaultofCodes",
    date: "1 June 2025 - 30 June 2025",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: kubairlogo,
    role: "Backend Engineer",
    company: "Kubair Bank",
    date: "May 2024 - July 2024",
    desc: "Engineered RESTful APIs in Go (Golang) to streamline data flow between PostgreSQL and server logic. Optimized PostgreSQL schemas for high-performance read/write operations, ensuring reliability for mission-critical user data.",
    skills: [
      "PostgreSQL",
      "Golang",
      "Database Integration",
      "JavaScript",
      "SQL",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "National Institute of Technology Patna",
    date: "Sept 2022 - May 2026",
    grade: "7.64 CGPA",
    desc: "Pursuing B.Tech in Electronics and Communication Engineering with a focus on embedded systems, IoT, and full-stack development. Key coursework includes Digital Signal Processing, Microprocessors, and Computer Networks. Actively applying theoretical knowledge through projects building smart devices and web applications, while participating in coding competitions.",
    degree: "B.Tech in Electronics and Communication Engineering",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "DR.B.P. Yadav S.S. School Babhnaiya, Saran",
    date: "June 2019 - February 2021",
    grade: "77.8%",
    desc: "Completed 12th grade under BSEB board with PCM (Physics, Chemistry, Mathematics) specialization.",
    degree: "BSEB (XII) - PCM Stream",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Galaxy Residential Public School, Jalalpur",
    date: "Apr 2018 - March 2019",
    grade: "91%",
    desc: "Completed 10th grade under CBSE board with distinction.  Developed strong analytical foundations through mathematics and science curriculum, while participating in school science exhibitions and mathematics and science olympiads.",
    degree: "CBSE (X) - Science with IT",
  },
];

export const projects = [
  {
    id: 0,
    title: "Real-Time Messaging Platform",
    description:
      "Built a scalable full-stack chat application supporting text/media exchange and user customization, serving 50+ concurrent users. Architected a MERN stack solution with React.js (frontend), Node.js/Express.js (backend), and MongoDB Atlas(database), styled with Tailwind CSS for responsive design. Implemented bidirectional communication using Socket.IO (WebSocket protocol), achieving < 500ms message latency across global users.",
    image: githubdetLogo,
    tags: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "Node.JS",
      "Express.JS",
      "Socket.IO",
      "MongoDB",
    ],
    github: "https://github.com/manibhushan20/Real-Time-Chat-Application",
    webapp: "https://real-time-chat-application-c3ik.onrender.com/",
  },
  {
    id: 1,
    title: "AI-Powered Conversational Interface",
    description:
      "Engineered a context-aware generative AI chatbot leveraging Google’s Gemini model for natural language interactions. Built the frontend with React.js and CSS for dynamic UI/UX, coupled with a Node.js/Express.js backend to orchestrate Gemini API requests. Integrated Google AI Studio for prompt engineering, achieving 85%+ accuracy in context retention across multi-turn dialogues.",
    image: csprepLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node.js",
      "Express",
      "Gemini API",
      "Google AI Studio",
    ],
    github: "https://github.com/manibhushan20/Generative-AI",
    webapp: "https://generative-ai-k2hn.onrender.com/",
  },
  {
    id: 2,
    title: "Real-Time Weather Analytics Platform",
    description:
      "Designed a full-stack web application delivering live weather metrics (temperature, humidity, wind) for global locations.Architected the solution using Node.js/Express.js backend with EJS templating, coupled with asynchronous data fetching from the OpenWeatherMap RESTful API.Implemented geolocation parsing and error handling for 200+ city inputs, achieving 99% API response reliability.",
    image: movierecLogo,
    tags: [
      "Node JS",
      "Express JS",
      "OpenWeatherMap API",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/manibhushan20/weather",
    webapp: "https://weather-41fv.onrender.com/",
  },
  {
    id: 3,
    title: "Music Kit",
    description:
      "This is musical kit website made using javascript . This website includes instruments like drum, guitar and tabla.",
    image: npmLogo,
    tags: ["HTML", "CSS", "JavaScript", "JQuery"],
    github: "https://github.com/manibhushan20/Music-Kit",
    webapp: "https://manibhushan20.github.io/Music-Kit/",
  },
];
