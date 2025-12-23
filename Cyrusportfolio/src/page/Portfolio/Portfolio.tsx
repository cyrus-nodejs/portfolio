import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../../assets/images/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";


const Portfolio = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // ──────────────── PROJECT GROUPS ────────────────
  const expressProjects = [
    {
      title: "🧠 Jollof AI — Smart Recipe Recommender",
      description: "An AI powered recipe generation and recommendation system",
      stack: "Node js ·Express · FastAPI · React · MongoDB · Machine Learning · Google Vision",
      details: [
        "Integrated machine learning algorithms to intelligently analyze ingredients and generate personalized recipe summaries, enhancing user experience and recommendation accuracy.",
        "Boosted user engagement by 60% through multimodal ingredient input — enabling recipe matching via text, voice, and image recognition.",
        "Accelerated backend performance by 40% by implementing efficient MongoDB indexing and caching for similarity-based recipe queries.",
        "Developed a modular, high-performance FastAPI microservice for real-time embedding generation and semantic recipe matching.",
      ],
      githubUrl: "https://github.com/team-accelerators/JollofAPI",
      liveUrl: "https://jollofai.netlify.app",
    },
    {
      title: "🛍️ E-Commerce App — MERN Stack",
      description: "A fullstack e-commerce platform with Stripe payment integration  ",
      stack:"MongoDB · Express · React · Node.js · Stripe API",
      details: [
        "Built a full-featured store with JWT authentication and product management dashboard.",
        "Integrated Stripe for smooth, secure checkout with 35% reduction in payment errors.",
        "Optimized UI with instant product search and category filtering.",
        "Enabled CRUD operations for admins — users, products, orders.",
      ],
      // imgUrl: projImg2,
      githubUrl: "https://github.com/cyrus-nodejs/e-commerce",
      liveUrl: 'https://shoppingluxury.netlify.app/',
    },
    {
      title: "💬 ChatPlanet — Real-Time Messaging",
      description: "A web based real time social messaging platform",
      stack:"React · Node.js · Socket.IO · PostgreSQL",
      details: [
        "Engineered scalable chat for 1,000+ users using WebSocket & Socket.IO.",
        "Integrated JWT-based authentication and live presence tracking.",
        "Added group chat, avatars, and message history sync.",
        "Reduced latency from 300ms → 80ms via socket batching optimization.",
      ],
      // imgUrl: projImg5,
      githubUrl: "https://github.com/cyrus-nodejs/chatplanet",
      liveUrl: "https://wen-chat.netlify.app/login",
    },
    {
  title: "📝 Todo Application",
  description: "A Full-stack Todo app featuring reminders and a real-time notification system.",
  stack: "React, TypeScript, Node.js, Express, MongoDB",
  details: [
    "Designed and developed a scalable full-stack application using React and TypeScript with a Node.js/Express backend",
    "Implemented secure user authentication and authorization using JWT and protected API routes",
    "Built a robust CRUD system for task management with support for task completion and updates",
    "Engineered a reminder and notification system to improve task tracking and user engagement",
    "Developed a RESTful API following best practices and clean architecture principles",
    "Integrated MongoDB with optimized schemas for efficient data persistence and retrieval",
    "Ensured application responsiveness and cross-device compatibility",
    "Deployed and maintained the application using modern cloud and CI/CD-friendly platforms"
  ],
  githubUrl: "https://github.com/cyrus-nodejs/todoapp",
  liveUrl: "https://todo-planet.netlify.app",
}
    // {
    //   title: "⚙️ SiteX AI powered Equipment Rentals Platform",
    //   description: "Node.js · Express · PostgreSQL · Paystack API · Docker · Prisma",
    //   details: [
    //     "Automated recurring payments using Paystack API, cutting manual billing by 75%.",
    //     "Implemented robust JWT authentication and role-based access control.",
    //     "Deployed via Docker & Nginx with GitHub Actions CI/CD for zero-downtime updates.",
    //     "Improved uptime to 99.9% through Redis caching and API performance monitoring.",
    //   ],
    //   // imgUrl: projImg7,
    //   githubUrl: "https://github.com/SiteXxx/SiteXxx-Backend",
    //   liveUrl: "#",
    // },
    
  ];

  const djangoProjects = [
    {
      title: "🎵 Music App — Django + React",
      description: 'Music streaming app with admin dashboard',
      stack: "Python · Django REST · React · PostgreSQL",
      details: [
        "Developed a full-stack music streaming app with playlists, subscriptions, and artist discovery.",
        "Implemented JWT-secured authentication via Django REST Framework.",
        "Built a responsive React frontend with an integrated audio player.",
        "Added admin dashboards for artist content and premium plan management.",
      ],
      // imgUrl: projImg4,
      githubUrl: "https://github.com/cyrus-nodejs/musicapp",
      liveUrl: "https://musicplanet.netlify.app/",
    },
    {
      title: "🧑‍💻 Developer Workflow Tracker",
      description: "A Developer productivity monitoring system",
      stack:"Python, Django REST · React · Chart.js · OAuth",
      details: [
        "Built a productivity tracker with Google & GitHub OAuth authentication.",
        "Integrated Chart.js dashboards for commit frequency and goal analytics.",
        "Synced GitHub PRs and commits to produce visual performance insights.",
        "Delivered weekly reports for developer productivity tracking.",
      ],
      // imgUrl: projImg6,
      githubUrl: "https://github.com/emmaadey/devlogger",
      liveUrl: "https://devlogger.emmaadey.com",
    },
  ];

  const nestjsProjects = [
     {
      title: "🧠 Employee  Management System",
      description: "A role-based platform that allows super users to create organisations, admins to invite employees, and employees to onboard securely.",
      stack:"Next.js, React, TypeScript, Tailwind CSS, shadcn/ui NestJS, Node.js",
     
      details: [
        "Role-based access control (Super Admin, Admin, Employee)",
        "Secure invite links with expiry",
        "Organisation-scoped data isolation",
        "Developed a modular, high-performance FastAPI microservice for real-time embedding generation and semantic recipe matching.",
      ],
      // imgUrl: projImg1,
      githubUrl: "https://github.com/team-accelerators/JollofAPI",
      liveUrl: "https://jollofai.netlify.app",
    },

        {
      title: "🧠 SaaS Dashboard & Analytics Platform",
      description: "A responsive SaaS dashboard for managing users, analytics, and system configuration with real-time data updates.",
        stack:"Next.js, React, TypeScript, Tailwind CSS, shadcn/ui NestJS, Node.js",
      details: [
        "Modular dashboard layout",
        "Real-time updates with WebSockets",
       "Server-side rendering for performance",
        "Protected routes & permissions",
        "Clean, scalable API architecture"
      ],
      // imgUrl: projImg1,
      githubUrl: "https://github.com/team-accelerators/JollofAPI",
      liveUrl: "https://employee-manager.netlify.app",
    },
  ];



  // ──────────────── ANIMATIONS ────────────────
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25 },
    },
  };
 const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ease: "easeOut" as any, // 👈 cast to 'any' or use [0.25, 0.1, 0.25, 1] instead
    },
  },
};

  const tabs = [
    { key: "expressjs", label: "Expressjs ", data: expressProjects },
    { key: "nestjs", label: "Nestjs ", data: nestjsProjects},
    { key: "python", label: "Python ", data: djangoProjects },
    
   
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Technical Projects Portfolio</h2>
                  <p>
                    Each project blends deep backend expertise with scalable architecture
                    and measurable product impact.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="expressjs">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                    >
                      {tabs.map((tab) => (
                        <Nav.Item key={tab.key}>
                          <Nav.Link eventKey={tab.key}>{tab.label}</Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>

                    <Tab.Content
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      {tabs.map((tab) => (
                        <Tab.Pane eventKey={tab.key} key={tab.key}>
                          <motion.div
                            className="row"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          >
                            {tab.data.map((project, index) => (
                              <motion.div
                                key={index}
                                className="col-md-6 mb-4"
                                variants={cardVariants}
                                whileHover={{ y: -5 }}
                              >
                                <ProjectCard
                                  {...project}
                                  isExpanded={expandedIndex === `${tab.key}-${index}`}
                                  onExpand={() =>
                                    handleExpand(
                                      expandedIndex === `${tab.key}-${index}`
                                        ? null
                                        : `${tab.key}-${index}`
                                    )
                                  }
                                />
                              </motion.div>
                            ))}
                          </motion.div>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};

export default Portfolio;
