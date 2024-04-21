import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Structures Expertise",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "C++ Programmer Intern",
    company_name: "CODSOFT",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2023 - September 2023",
    points: [
      "Developed and maintained C++ applications under supervision.",
      "Collaborated with team members to solve coding challenges.",
      "Assisted in debugging and troubleshooting issues in existing codebase.",
      "Participated in code reviews and learned from feedback."
    ]
  }
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a movie theatre system this good.",
    name: "Aparna Dixit",
    designation: "CFO",
    company: "CODSOFT",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Mind Game",
    description:
      "A web-based mind game developed with HTML, CSS, and JavaScript. The game challenges players to solve puzzles and improve their cognitive skills such as memory, attention, and problem-solving abilities.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "game",
        color: "purple-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/dhruvknowstocode/Brainwave-Blitz",
  },
  {
    name: "Weather App",
    description:
      "A web application built with React that allows users to check the current weather conditions and forecasts for different locations. Users can search for cities and view details such as temperature, humidity, and wind speed.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "yellow-text-gradient",
      },
      {
        name: "api",
        color: "purple-text-gradient",
      },
      {
        name: "frontend",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide, // Replace with your screenshot file name
    source_code_link: "https://github.com/dhruvknowstocode/WeatherApp", // Replace with your GitHub repository link
  },

  {
    name: "Airbnb Clone",
    description:
      "A web application that mimics the functionality of Airbnb, allowing users to search for accommodations, make bookings, and manage their listings. With an intuitive user interface, users can easily browse through a wide range of listings.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "js",
        color: "yellow-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: carrent, // Replace with your screenshot file name
    source_code_link: "https://github.com/dhruvknowstocode/Project1", // Replace with your GitHub repository link
  },
];

export { services, technologies, experiences, testimonials, projects };
