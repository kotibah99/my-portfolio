import { BiSend } from "react-icons/bi";
import { TbServer2 } from "react-icons/tb";
import { CiGrid31, CiMail } from "react-icons/ci";
import { FiHome, FiFileText } from "react-icons/fi";
import { MdOutlineDynamicForm } from "react-icons/md";
import { ImFilePicture, ImMoveUp } from "react-icons/im";
import { AiOutlineCode, AiOutlineUser } from "react-icons/ai";
import { BsBraces, BsCode, BsTelephone } from "react-icons/bs";
import { HiOutlineBriefcase, HiOutlineLocationMarker } from "react-icons/hi";

import rawaaDashboard from "../assets/rawa-dashboard.png";
import omnifood from "../assets/omnifood.png";
import forkify from "../assets/forkify.png";
import rawaa from "../assets/rawaafood.png";
import fetchApi from "../assets/fetchApi.png";
import autoComplete from "../assets/autoComplete.png";
import kotibahIT from "../assets/kotibahIT.png";
import movieList from "../assets/movieList.png";
import Graduation from "../assets/Graduation.jpg";
import BookMark from "../assets/BookMark.png";
import laptop from "../assets/laptop.jpg";
import Maraya from "../assets/Maraya.png";
import proGym from "../assets/proGym.png";
import gitHub from "../assets/gitHub.png";
import personal from "../assets/personal.jpg";
import kotibah_4_IT from "../assets/kotibah_4_IT.jpg";
export const SKILLS = [
  {
    title: "Programming",
    subtitle: "More than 2 Year",
    Icon: AiOutlineCode,
    content: [
      {
        name: "C++",
        progress: 80,
      },
      {
        name: "Python",
        progress: 40,
      },
      {
        name: "OOP",
        progress: 75,
      },
      {
        name: "Data Structures",
        progress: 85,
      },
      {
        name: "Algorithms",
        progress: 70,
      },
      {
        name: "Java",
        progress: 70,
      },
      {
        name: "Design Patterns",
        progress: 85,
      },
    ],
  },
  {
    title: "Frontend developer",
    subtitle: "Experienced",
    Icon: BsBraces,
    content: [
      {
        name: "HTML",
        progress: 95,
      },
      {
        name: "CSS  / Sass",
        progress: 95,
      },
      {
        name: "JavaScript",
        progress: 90,
      },

      {
        name: "React",
        progress: 85,
      },
      {
        name: "web pack",
        progress: 70,
      },
      {
        name: "typeScript",
        progress: 60,
      },
      {
        name: "Basic of web Security",
        progress: 50,
      },
      {
        name: "PWA Support / test library / Es Lint   ",
        progress: 60,
      },
      {
        name: "bootstrap    ",
        progress: 80,
      },
      {
        name: "Ajax / Rest Api / Json Server / Axios    ",
        progress: 80,
      },
      {
        name: "Git / GitHub    ",
        progress: 90,
      },

    ],
  },
  {
    title: "Backend developer",
    subtitle: "Entry Level",
    Icon: TbServer2,
    content: [
      {
        name: "Node.JS",
        progress: 50,
      },
      {
        name: "MongoDB / MySQL",
        progress: 60,
      },
      {
        name: "Relational DB",
        progress: 75,
      },
      {
        name: "php",
        progress: 80,
      },
    ],
  },
];

export const NAV_LIST = [
  { name: "Home", Icon: FiHome },
  { name: "About", Icon: AiOutlineUser },
  { name: "Skills", Icon: FiFileText },
  { name: "Services", Icon: HiOutlineBriefcase },
  { name: "Portfolio", Icon: ImFilePicture },
  { name: "ContactMe", Icon: BiSend },
];

export const SERVICES_LIST = [
  {
    Icon: MdOutlineDynamicForm,
    title: "Dynamic Websites Development",
    content: [
      "Flexible and quick change on the user’s computer without new page request to the web browser.",
      "Provide ability to simply update and add new content to the site.",
      "Share your project requirements for the perfect mix of talent and expertise.",
    ],
  },
  {
    Icon: ImMoveUp,
    title: "Migrating Apps from Legacy Systems",
    content: [
      "Assists in adopting system functionality.",
      "Wrapping the code of your existing architecture into modules.",
      "Update your application while eliminating challenges and issues.",
    ],
  },
  {
    Icon: CiGrid31,
    title: "UI/UX Development",
    content: [
      "Build interactive UIs and impressive web applications that attract users.",
      "Deliver highly-engaging interface development using the latest features of ReactJS.",
    ],
  },
  {
    Icon: BsCode,
    title: "Maintenance and Support",
    content: [
      "Renders maintenance and support services for consistent and stable performance of applications.",
      "I can also update your app functionality on demand.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "Graduation Project",
    description:
      "Website automation single window platform for the university but it needs hosting",
    image: Graduation,
    demo: "",
    github:
      "",
    tools: ["html/css", "javascript", "php", "mySql", "laravel"],
  },
  {
    name: "proGym Moualla ",
    description: "Gym website with UI layouts and segmentation per club sections and requirements",
    image: proGym,
    demo: "https://kotibah99.github.io/proGymMoualla/",
    github:
      "https://github.com/kotibah99/proGymMoualla",
    tools: ["html/css", "javascript"],
  },
  {
    name: "MovieList",
    description:
      "A site for watching and downloading movies, suitable for use with large and small screens",
    image: movieList,
    demo: "https://kotibah99.github.io/Movies-list/",
    github:
      "https://github.com/kotibah99/Movies-list",
    tools: ["html/css", "javascript", "php", "mySql"],
  },
  {
    name: "Maraya.com",
    description: "website for large Screen not responsive",
    image: Maraya,
    demo: "https://kotibah99.github.io/training1/",
    github:
      "https://github.com/kotibah99/training1",
    tools: ["html/css"],
  },
  {
    name: "Responsive",
    description: "Create a simple, formatted design as a ready-made template for other projects",
    image: laptop,
    demo: "https://kotibah99.github.io/responsive-personal-work/",
    github:
      "https://github.com/kotibah99/responsive-personal-work",
    tools: ["html/css"],
  },
  {
    name: "BookMarker",
    description:
      "Application for links and local storage",
    image: BookMark,
    demo: "https://kotibah99.github.io/BookMarker-App-/",
    github:
      "https://github.com/kotibah99/BookMarker-App-",
    tools: ["html/css", "javascript"],
  },
  {
    name: "win with Kotibah_4_IT",
    description:
      "Program to choose the winner at random With a site protection  (front-end and back-end)",
    image: kotibahIT,
    demo: " https://kotibah99.github.io/Win-With-Kotibah_4_IT-full-stack/",
    github:
      "https://github.com/kotibah99/Win-With-Kotibah_4_IT-full-stack",
    tools: ["html/css", "javascript", "php", "mySql"],
  },
  {

    name: "Rawaa App",
    description:
      "web-based food ordering application. The app is fully responsive to small devices (e.g., mobiles or tablets).",
    image: rawaa,
    demo: "https://rawaa-app.vercel.app/",

    tools: [
      "react.js",
      "redux toolkit",
      "chakra ui",
      ".net",
      "rest",
      "sql server",
    ],
  },
  {
    name: "Rawaa Dashboard",
    description:
      "UI management tool for managing Rawaa-app. The app has quick summary widgets, graphs for displaying data, and sortable, paginated, and filtered tables to display data.",
    image: rawaaDashboard,
    demo: "https://rawaa-dashboard.vercel.app/",

    tools: [
      "react.js",
      "react query",
      "chakra ui",
      ".net",
      "rest",
      "sql server",
    ],
  },
  {
    name: "Forkify",
    description: "recipe application with custom recipe upload.",
    image: forkify,
    demo: "https://forkify-hossam.netlify.app/",

    tools: ["html/css", "javascript", "rest"],
  },
  {
    name: "Omnifood",
    description:
      "Landing page for an ai-food company. Website adaptable to all devices, with-ui components and animated interactions.",
    image: omnifood,
    demo: "https://omnifood-hossam.netlify.app/",

    tools: ["html/css", "javascript"],
  },

  {
    name: "Fetch Api",
    description:
      "Fetch all forms of data",
    image: fetchApi,
    demo: " https://kotibah99.github.io/Fetch-Api/",
    github:
      "https://github.com/kotibah99/Fetch-Api/settings/pages",
    tools: ["html/css", "javascript", "json"],
  },
  {
    name: "Auto Complete",
    description:
      "Automated writing with javascript",
    image: autoComplete,
    demo: " https://kotibah99.github.io/Auto-Complete-App-with-Json-Js/",
    github:
      "https://github.com/kotibah99/Auto-Complete-App-with-Json-Js",
    tools: ["html/css", "javascript", "json"],
  },
  {
    name: "Personal Website",
    description:
      "",
    image: personal,
    demo: "  https://kotibah99.github.io/personal-website/",
    github:
      "https://github.com/kotibah99/personal-website",
    tools: ["html/css", "javascript"],
  },
  {
    name: "kotibah_4_IT ",
    description:
      "A site to introduce my personal page, especially for everything related to social media",
    image: kotibah_4_IT,
    demo: "  https://kotibah99.github.io/Kotibah_4_IT-CV/",
    github:
      "https://github.com/kotibah99/Kotibah_4_IT-CV",
    tools: ["html/css", "javascript"],
  },
  {
    name: "My GitHub",
    description:
      "Here are some of my projects and I will post more later for everyone's benefit",
    image: gitHub,
    github:
      "https://github.com/kotibah99",
    tools: [],
  },
];

export const CONTACT = [
  {
    Icon: BsTelephone,
    title: "Contact Me",
    subtitle: "+963 99 11 00 863   ",
  },
  {
    Icon: CiMail,
    title: "Email",
    subtitle: "kotibahmohamad@gmail.com",
  },
  {
    Icon: HiOutlineLocationMarker,
    title: "Location",
    subtitle: "Syria",
  },
];
