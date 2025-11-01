import React from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from   "../../assets/images/meter1.svg";
import meter2 from  "../../assets/images/meter2.svg";
import meter3 from  "../../assets/images/meter3.svg";
import colorSharp from "../../assets/images/color-sharp.png";
import { Variants } from "framer-motion";

const Skillbox = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    // ✅ use an easing array (equivalent to easeOut)
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <motion.div
              className="skill-bx"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <motion.h2
                className="text-center mb-3"
                variants={fadeIn}
                transition={{ delay: 0.1 }}
              >
                ⚙️ Skills
              </motion.h2>

              <motion.p
                className="text-center mb-5"
                variants={fadeIn}
                transition={{ delay: 0.2 }}
              >
                As a <strong>Software Engineer</strong> specializing in backend systems
                and AI-powered solutions, I blend clean architecture with intelligent
                automation to build products that scale efficiently and perform seamlessly.
              </motion.p>

              <motion.div variants={fadeIn} transition={{ delay: 0.3 }}>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item">
                    <img src={meter1} alt="Back End Development" />
                    <h5>Back End Development</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Database Management" />
                    <h5>Database Management</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="Cloud and DevOps" />
                    <h5>Cloud and DevOps</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="System Design & Architecture" />
                    <h5>System Design & Architecture</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="Collaboration & Best Practices" />
                    <h5>Collaboration & Best Practices</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="Fullstack Capabilities" />
                    <h5>AI & Machine Learning Integration</h5>
                  </div>
                </Carousel>
              </motion.div>

              <div className="skills-text mt-5 text-start">
                <motion.div variants={fadeIn} transition={{ delay: 0.4 }}>
                  <h3>🧩 Core Technologies</h3>
                  <p>
                    Node.js, TypeScript, Python, FastAPI, Express.js, Flask, Django, and React —
                    my go-to stack for building robust APIs and full-featured applications.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} transition={{ delay: 0.5 }}>
                  <h3>🗄️ Databases & Data Handling</h3>
                  <p>
                    Proficient in PostgreSQL, MongoDB, Redis, and MySQL, with experience using
                    Prisma ORM for efficient data modeling. I focus on query optimization,
                    indexing, and caching strategies to ensure high-performance data operations.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} transition={{ delay: 0.6 }}>
                  <h3>☁️ DevOps & Cloud Tools</h3>
                  <p>
                    Hands-on experience with Docker, GitHub Actions, AWS, Render, Heroku, and Netlify.
                    I design CI/CD pipelines and automate deployments to ensure reliability, scalability,
                    and near-zero downtime.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} transition={{ delay: 0.7 }}>
                  <h3>🤖 AI & Machine Learning Integrations</h3>
                  <p>
                    I enjoy integrating OpenAI APIs and LangChain to create intelligent, data-driven
                    features. From AI recipe assistants to recommendation systems, I focus on making
                    products smarter and more adaptive.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} transition={{ delay: 0.8 }}>
                  <h3>🧠 Software Engineering Principles</h3>
                  <p>
                    Strong foundation in algorithms, data structures, system design, and testing.
                    Committed to writing clean, maintainable, and optimized code that scales across
                    projects and teams.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} transition={{ delay: 0.9 }}>
                  <h3>💼 Professional & Team Skills</h3>
                  <p>
                    Effective communicator and collaborator with experience in Agile/Scrum environments.
                    I thrive in solving complex problems, mentoring peers, and driving technical
                    discussions that move projects forward.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.img
        className="background-image-left"
        src={colorSharp}
        alt="decorative background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </section>
  );
};

export default Skillbox;
