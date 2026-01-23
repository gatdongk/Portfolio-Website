// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import manlhamtechLogo from './assets/company_logo/manlhamtech_logo.png';
import flybringsmileLogo from './assets/company_logo/flybringsmile_logo.png';
import skilllinkLogo from './assets/company_logo/skilllink_logo.png';

// Education Section Logo's
import kuLogo from './assets/education_logo/ku_logo.png';
import kcseLogo from './assets/education_logo/kcse_logo.png';
import cskLogo from './assets/education_logo/csk_logo.png';
import donboscoLogo from './assets/education_logo/donbosco_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import mtsLogo from './assets/work_logo/mts.png';
import manlhamLogo from './assets/work_logo/manlham.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: manlhamtechLogo,
      role: "Full-Stack Developer",
      company: "Manlham Tech Support",
      date: "April 2019 - Present",
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
      img: flybringsmileLogo,
      role: "System Administrator",
      company: "Fly Bring Smile",
      date: "July 2020 - Nov. 2021",
      desc: "Managed and maintained the company's IT infrastructure, ensuring 99.9% uptime for internal servers and networks. Responsible for user access control, system security audits, and implementing automated backup solutions. Provided technical support for hardware and software issues while optimizing system performance and troubleshooting network connectivity.",
      skills: [
        "Server Management",
        "Linux/Unix",
        "Network Security",
        "Active Directory",
        "Cloud Computing (AWS/Azure)",
        "Backup & Recovery",
        "Troubleshooting",
      ],
    },
    {
      id: 2,
      img: skilllinkLogo,
      role: "Frontend Intern",
      company: "SkillLink Nexus",
      date: "November 2025 - Present",
      desc: "Working as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
  
    {
      id: 0,
      img: kuLogo,
      school: "Kenyatta University, Kenya",
      date: "Sept 2022 - Present",
      grade: "Ongoing",
      desc: "Currently pursuing a Bachelor of Science in Computer Science, focusing on the core foundations of software engineering. My coursework includes Data Structures and Algorithms, Web Development, and Database Management Systems. I focus on bridging the gap between theoretical computing concepts and real-world applications through hands-on project development.",
      degree: "Bachelor of Science in Computer Science"
    },
    {
      id: 1,
      img: kcseLogo,
      school: "Somali Bantu Secondary School, Kakuma Refugees Camp, Kenya",
      date: "Jan 2017 - Nov 2020",
      grade: "Mean Grade: B- (68%)",
      desc: "Completed the Kenya Certificate of Secondary Education (KCSE) with a focus on Physics, Chemistry, and Mathematics (PCM). This strong analytical foundation in the sciences facilitated my transition into higher education and specialized studies in Computer Science.",
      degree: "Kenya Certificate of Secondary Education (KCSE)"
    },
    {
      id: 2,
      img: cskLogo,
      school: "The Computer Society of Kenya",
      date: "Apr 2016 - March 2017",
      grade: "88.5%",
      desc: "Attained an Advanced Diploma in IT, mastering complex networking concepts, system analysis, and advanced computing principles recognized by the Computer Society of Kenya.",
      degree: "Advanced Diploma in Information Technology"
    },
    {
      id: 3,
      img: donboscoLogo,
      school: "Don Bosco Technical Institute, Kenya",
      date: "June 2019 - Dec. 2019",
      grade: "89.7%",
      desc: "Completed foundational training in Computer Applications, covering essential computing operations, office productivity suites, and digital literacy with high academic standing.",
      degree: "Certificate in Computer Applications"
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/gatdongkim/Github-Profile-Detective",
      webapp: "https://github-profile-search-detective.netlify.app/",
    },
    {
      id: 1,
      title: "MTS Prep",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/gatdongkim/MTSPrep",
      webapp: "https://mts-prep.vercel.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/gatdongkim/Movie-Recommendation-Ap",
      webapp: "https://movie-recommendation-jet.vercel.app/",
    },
    // {
    //   id: 3,
    //   title: "Email Validator NPM Package",
    //   description:
    //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    //   image: npmLogo,
    //   tags: ["React JS", "Node.js", "NPM", "Validation"],
    //   github: "https://github.com/gatdongkim/cmtk-email-validator",
    //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    // },
    // {
    //   id: 4,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/gatdongkim/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    {
      id: 5,
      title: "Manlham Tech Support",
      description:
        "The official website for Manlham Tech Support, began with a vision to revolutionize computerized accounting systems. Today, they are a leading provider of IT services and networking solutions across Africa.",
      image: manlhamLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/gatdongkim/manlhamtechsupport",
      webapp: "https://manlhamtechsupport.vercel.app/",
    },
    {
      id: 6,
      title: "Manlham Tech Platform",
      description:
        "Manlham Tech Support empowers students to find high-impact gigs while providing clients with verified, top-tier talent. Secure, fast, and built for growth.",
      image: mtsLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://github.com/gatdongkim/manlham-platform/",
      webapp: "https://manlham-tech.vercel.app/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/gatdongkim/Image-Search-App",
      webapp: "https://imagesearching1.netlify.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/gatdongkim/Image-Background-Remover",
      webapp: "https://removeyourbg.vercel.app/",
    },
  ];  