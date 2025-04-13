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
  blockchain,
  contriflow,
  foodDil,
  HumanVSAi,
  scetTnp,
  NGO,
  trafficDen,
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
    title: "Next.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Application Developer",
    icon: blockchain,
  },
];

const technologies = [
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
    name: "git",
    icon: git,
  },

];

const MyTechnologies = [
  {
    name: "Lunguages",
    content:["HTML", "CSS", "JavaScript", "TypeScript","C","C++","JAVA","Python","PHP","Solidity"],
  },
  {
    name: "Frameworks",
    content: ["Hardhat", "Truffle", "MERN stack", "Next.js", "Bootstrap CSS", "Tailwind CSS", "Clerk" ,"Git & Github"],
  },
  {
    name: "Databases",
    content: ["SQl", "MongoDb", "NeonDb","Prisma"],
  },
  {
    name: "Core Subjects",
    content: ["Data Structure and Algoritham", "Database management System", "Object Oriented Programming",  "Opreating System", "Computer Networks", "Network Security", "Theory of compilation", "Blockchain Technology"],
  },
  {
    name: "Non-Technical",
    content: [
      "Communication",
      "Teamwork",
      "Time Management",
      "Problem Solving",
      "Critical Thinking",
      "Creativity",
      "Conflict Resolution",
      "Decision Making",
      "Public Speaking",
    ],
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [

  {
    name: "ContriFlow - reward services for contributers on GitHub",
    description:
      "WCreated a decentralized reward service for repo owner to help to manage funding to contributors. This project based on Ethereum Blockchain. Clerk used as user session management and NeonDB, Prisma used as database. Next.js used as web development framework.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "Blockchain",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
    ],
    image: contriflow,
    source_code_link: "https://github.com/MannPatel1207/Git-Rewards",
  },
  {
    name: "Training and Placement Portal for SCET College",
    description:
      " We have created a TnP portel for our college which is currently in varification phase at college. It is Web app with advance placement data visualization n graph. According to Tnp department representative, It hepls them to provide information to student.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "RESTApi",
        color: "pink-text-gradient",
      },
    ],
    image: scetTnp,
    source_code_link: "https://github.com/MannPatel1207/ScetTnP_Backend",
  },
  {
    name: "Density Detection System",
    description:
      "We have created a vehicle density detection web app which detect density of vehicle on any given road it helps us in the smart traffic signal project whih is currently in developing stage. Which include Image processing and YOLO v8 model which is fine Tuned according to uor dataset.",
    tags: [
      {
        name: "YOLOv8n",
        color: "blue-text-gradient",
      },
      {
        name: "ImageProcessing",
        color: "green-text-gradient",
      },
      {
        name: "Streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: trafficDen,
    source_code_link: "https://github.com/MannPatel1207",
  },
  {
    name: "NGO Funding PLatform",
    description:
      " We have create a plateform based on ethereum blockchain for NGO to get funding from user. It first need to uupload proof of spending then doner donte funfs. it helps NGO to get funds from donor and Donor also can track it's donation to NGO. It is based on Ethereum blockchain and Solidity for contract gereration , Hardhat for testing and Deployment of contract. It uses MERN stack for web app.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Blockchain",
        color: "green-text-gradient",
      },
      {
        name: "Ethereum",
        color: "pink-text-gradient",
      },
    ],
    image: NGO,
    source_code_link: "https://github.com/MannPatel1207/NGOFundingPLateform",
  },
  {
    name: "Gamified Food Delivery App",
    description:
      "In Hackthon at VCET, we crated food Deleviry appication with additional Gamified Elements i.e. leader board , reward mission , personal mission , gorup mission and bedge system. We Have used MERN stack to develope web app. which is hosted on render.com. for that we have won the net code award.",
    tags: [
      { 
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "RESTApi",
        color: "pink-text-gradient",
      },
    ],
    image: foodDil,
    source_code_link: "https://github.com/MannPatel1207/Gamified-food-delivery-app---VCET-Hackthon",
  },
  {
    name: "Human VS AI Gmaeplaying Playeform",
    description:
      "We have create a gameplaying platform for human vs AI.Mern stack is used for web app and python is used for AI model. ",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: HumanVSAi,
    source_code_link: "https://github.com/MannPatel1207/HUMANVSAI",
  },
];

export { services, technologies, experiences, testimonials, projects, MyTechnologies };
