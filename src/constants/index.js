import {
  mobile,
  backend,
  creator,
  web,
  cinema,
  moteur,
  opencv1,
  medal,
  robot,

  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  threejs,
  linux,
  spring,
  pytorch,
  c,
  csharp,
  flutter,
  angular,
  python,
  java,
  docker,

  ipeit,
  tt,
  enit,
  g2foss,
  bac,

  ai,
  genai,
  dlintro,
  dlint,
  mlsup,
  mlintro,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "exp",
    title: "Experience",
  },
  {
    id: "work",
    title: "projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "associative",
    title: "Certifications",
  },
];

const services = [
  {
    title: "Web Development",
    icon: mobile,
  },
  {
    title: "AI",
    icon: backend,
  },
  {
    title: "Machine Learning / DeepLearning",
    icon: web,
  },
  {
    title: "Data Science ",
    icon:creator,
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
    name: "Linux",
    icon: linux,
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
    name: "python",
    icon: python,
  },
  {
    name: "pytorch",
    icon: pytorch,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "java",
    icon: java,
  },  {
    name: "docker",
    icon: docker,
  }, 


];

const experiences = [
  {
    title: "Baccalauréat Mathématique",
    company_name: "collége/Lycée Pilote Tataouine ",
    icon: bac,
    iconBg: "#E6DEDD",
    date: "sep 2014 - juin 2021",
    points: ["Moyenne : 15.55",
      
    ],
  },
  {
    title: "Cycle Préparatoire",
    company_name: "IPEIT",
    icon: ipeit,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Juin 2023",
    points: ["MATH PHYISIQUE ",
      "RANG 293",
      "Check my LinkedIn for more details"
    ],
  },
  {
    title: "Cycle Ingénieur : Informatique",
    company_name: "ENIT",
    icon: enit,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - 2026",
    points: ["Currently Studying - 2nd Year",
      "Check my LinkedIn for more details"
    ],
  },
  {
    title: "Manageur Logistique pour : ENIT GOT THE FLAG 2.0",
    company_name: "G2FOSS",
    icon: g2foss,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - April 2024",
    points: ["I held the position of Logistics Manager for ENIT GOT THE FLAG 2.0, where I coordinated resource management, task organization, and logistical follow-up to ensure the smooth execution of the event.",
      "Check my LinkedIn for more details"
    ],
  },
  {
    title: "Stage d'observation ",
    company_name: "Tunisie Télécome",
    icon: tt,
    iconBg: "#E6DEDD",
    date: "During July 2024",
    points: [
      "I completed a worker internship at Tunisie Telecom, where I gained hands-on experience in radio equipment, transmission systems, energy management, and troubleshooting operations."
      ,"Check my LinkedIn for more details",
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
    name: "Java Moteur de Recherche",
    description:
"ava-based search engine clone optimized for handling folders with over 50,000 files containing multiple lines of text. ",    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "optimisation",
        color: "green-text-gradient",
      },
      {
        name: "OOP",
        color: "pink-text-gradient",
      },
    ],
    image: moteur,
    source_code_link: "https://github.com/",
  },

  {
    name: "Movie ticket system J2EE",
    description:
"A 𝑾𝒆𝒃 𝑨𝒑𝒑𝒍𝒊𝒄𝒂𝒕𝒊𝒐𝒏 for Cinema Seat Reservation, designed to be deployed on a 𝑾𝒊𝒍𝒅𝒇𝒍𝒚 application server",    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "J2EE",
        color: "green-text-gradient",
      },
      {
        name: "EJB",
        color: "pink-text-gradient",
      },
      {
        name: "Wildfly",
        color: "pink-text-gradient",
      },
    ],
    image: cinema ,
    source_code_link: "https://github.com/",
  },
  {
    name: "Olympics medal prediction",
    description:"Country Medal Prediction Model This project uses machine learning to predict the number of medals a country will win in future international competitions",    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "LinearRegression",
        color: "green-text-gradient",
      },
      {
        name: "supervised learning",
        color: "pink-text-gradient",
      },
    ],
    image: medal,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hand Gesture-Based Zoom with OpenCV",
    description:
"This project demonstrates an interactive zoom effect controlled by hand gestures using OpenCV and cvzone.HandTrackingModule. Users can resize an image in real-time by moving their hands in front of a webcam. The zoom gesture is detected when both hands are visible, and specific finger combinations are used.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "cvzone.HandTrackingModule",
        color: "pink-text-gradient",
      },
    ],
    image: opencv1,
    source_code_link: "https://github.com/waeletteyeb/Hand-Gesture-Zoom-with-OpenCV",
  },
  {
    name: "FullStack Shopping Website with Angular SpringBoot",
    description:
"Joe's Robot Shop Entity is an e-commerce platform built with Angular (front end) and Spring Boot (back end).",    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
    ],
    image: robot,
    source_code_link: "https://github.com/waeletteyeb/TP4-ROBOT-SHOP",
  }
  
];




const social = [
  {
    name: "Understanding Machine Learning",
    description:
"DataCamp course achievement ",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
    ],
    image: mlintro,
    source_code_link: "https://github.com/",
  },

  {
    name: "Supervised Learning with scikit-learn",
    description:"DataCamp course achievement"   ,
     tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-Learn",
        color: "green-text-gradient",
      },


    ],
    image: mlsup ,
    source_code_link: "https://github.com/",
  },
  {
    name: " Ibtroduction to Deep Learning with PyTorch",
    description:"DataCamp course achievement"   ,
     tags: [
      {
        name: "Deep Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Pytorch",
        color: "green-text-gradient",
      },


    ],
    image: dlintro ,
    source_code_link: "https://github.com/",
  },
  {
    name: "Intermediate Deep Learning with PyTorch",
    description:"DataCamp course achievement"   ,
     tags: [
      {
        name: "Deep Learning",
        color: "blue-text-gradient",
      },
      {
        name: "PyTorch",
        color: "green-text-gradient",
      },


    ],
    image: dlint ,
    source_code_link: "https://github.com/",
  },
  {
    name: "Understanding Artificial Intelligence",
    description:"DataCamp course achievement"   ,
     tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
    ],
    image: ai ,
    source_code_link: "https://github.com/",
  },
  {
    name: "CCNA: Introduction to Networks",
    description:"offered by Ecole Nationale d'Ingénieurs de Tunis (ENIT) through the Cisco Networking Academy program."   ,
     tags: [
      {
        name: "Cisco",
        color: "blue-text-gradient",
      },
      {
        name: "Basics",
        color: "green-text-gradient",
      },


    ],
    image: genai ,
    source_code_link: "https://github.com/",
  },

  ];
  

export { services, technologies, experiences, testimonials, projects , social };
