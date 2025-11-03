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
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
  eatzy,
  gms,
  spring,
} from "../assets";
import derma from "../assets/Derma.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "MERN Stack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Freelance Frontend Developer",
    company_name: "Self-employed",
    icon: freelance, // Replace with any icon you like
    iconBg: "#0188E3",
    date: "Jan 2024 - Present",
    points: [
      "Designed & developed full-stack web applications using React.js, Node.js, Spring, Express, & MySQL.",
      "Built responsive, mobile-friendly interfaces with modern tools like Tailwind CSS & Material UI.",
      "Practiced problem-solving & optimized code through regular DSA & coding challenges.",
      "Collaborated on team & academic projects, focusing on clean code & scalable architecture."
    ],
  },
  {
    title: "Competitive Programmer | Problem Solver",
    company_name: "Self-driven Practice",
    icon: sheryians, // Or institute logo
    iconBg: "#ffff",
    date: "Jan 2024 - Present",
    points: [
      "Solved 1000+ Data Structures & Algorithms problems on platforms like LeetCode, GeeksforGeeks, HackerRank, Neetcode & CodeChef.",
      "Focused on optimizing algorithms & improving time & space complexity.",
      "Practiced problem-solving regularly to strengthen logical thinking & coding skills.",
      "Participated in online contests & coding challenges to improve competitive programming experience."
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
    name: "Derma-X:Skin Cancer Detection",
    description:
      "Developed a convolutional neural network (CNN) model to detect melanoma and other skin cancer types from dermoscopic images with ~86% accuracy. Implemented data augmentation, image preprocessing, and transfer learning using TensorFlow and Keras to enhance model performance. Built an interactive web interface for real-time image uploads and cancer probability predictions.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
    
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "orange-text-gradient",
      },
      {
        name: "Keras",
        color: "green-text-gradient",
      },
    ],
    image: derma,
    source_code_link: "https://github.com/Shubham-K9/Melanoma_Skin_Cancer_Detection",
    live_website_link: "https://melanoma-skin-cancer-detection-gnxfbporh.vercel.app/",
  },
  {
    name: "GrabMySeat-Smart Ticket Booking Platform",
    description:
      "Built a full-stack ticket booking platform enabling users to browse, book, and pay for movie and event tickets seamlessly. Integrated real-time seat selection, user authentication, and payment gateway support (Razorpay/Stripe) to ensure smooth and secure transactions. Designed with a modular architecture for easy scalability across multiple event categories.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Spring",
        color: "green-text-gradient",
      },
      {
        name: "Shadcn/ui",
        color: "orange-text-gradient",
      },

    ],
    image: gms,
    source_code_link: "https://github.com",
    live_website_link: "https://netlify.app/",
  },
  {
    name: "Eatzy-A Food Ordering Website",
    description:
      "Designed and developed a responsive food ordering web app featuring menu browsing, order customization, and cart management. Integrated the live Swiggy API for dynamic, real-time data fetching, enabling a fully data-driven UI that updates based on live restaurant and menu data — a complex implementation showcasing advanced API handling and state management.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Reactjs",
        color: "orange-text-gradient",
      },
    ],
    image: eatzy,
    // github link ⬇️
    source_code_link: "https://github.com/",
    // project link ⬇️
    live_website_link: "https://app.netlify.com/teams/gitswastik08/projects",
  },
];

export { services, technologies, experiences, testimonials, projects };
