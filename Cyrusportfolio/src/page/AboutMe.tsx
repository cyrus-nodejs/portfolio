import React from "react";
import { motion, Variants } from "framer-motion";
import profileImg from "../assets/images/1765793631850.jpg";
import colorSharp from "../assets/images/color-sharp.png";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiNestjs, SiExpress } from "react-icons/si";

const tools = [
  { name: "React", icon: FaReact },
  { name: "React Native", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "NestJS", icon: SiNestjs },
  { name: "Express.js", icon: SiExpress },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
];

const About = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: custom, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="about py-5 position-relative" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* Profile Image */}
          <div className="col-12 col-md-6 col-xl-5 mb-4 mb-md-0">
            <motion.img
              src={profileImg}
              alt="Emmanuel Adeyemi"
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxHeight: "420px", objectFit: "cover" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>

          {/* About Text */}
          <div className="col-12 col-md-6 col-xl-7">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={fadeInUp}
                custom={0}
                className="fw-bold mb-3"
                style={{ fontSize: "2.2rem", letterSpacing: "-0.5px" }}
              >
                👋 About Me
              </motion.h2>

              {[
                "I’m Emmanuel Adeyemi, a Full-Stack Software Engineer with a deep interest in AI integration, backend scalability, and clean system design.",
                "My toolkit includes React, React Native, Next.js, NestJS, Express.js, Node.js, and TypeScript — technologies I use to craft reliable, scalable, and efficient digital systems.",
                "I enjoy building AI-powered backends that bring intelligence to user experiences — from integrating OpenAI APIs to designing LangChain-based automation that scales effortlessly.",
                "Beyond code, I value clarity, collaboration, and craftsmanship in engineering. I believe great software balances precision and empathy — it’s built for people, not just for systems.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  variants={fadeInUp}
                  custom={0.1 * (i + 1)}
                  className="text-secondary mb-3"
                  style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
                >
                  {text}
                </motion.p>
              ))}

              <motion.p
                variants={fadeInUp}
                custom={0.5}
                className="fw-semibold text-secondary mt-4"
                style={{ fontSize: "1.15rem" }}
              >
                🚀 My mission: Build intelligent, reliable systems that scale —
                with simplicity and purpose.
              </motion.p>

              {/* Tools I Use Daily */}
              <motion.div
                className="d-flex flex-wrap gap-3 mt-4"
                variants={staggerContainer}
              >
                {tools.map((tool, i) => {
                  const Icon = tool.icon;
                  return (
                    <motion.div
                      key={tool.name}
                      variants={fadeInUp}
                      custom={0.1 * (i + 1)}
                      whileHover={{
                        scale: 1.15,
                        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                      }}
                      className="d-flex align-items-center gap-2 bg-light p-2 rounded shadow-sm cursor-pointer"
                      style={{ minWidth: "140px" }}
                    >
                      <Icon size={24} className="text-primary" />
                      <span className="fw-semibold">{tool.name}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Background */}
      <motion.img
        src={colorSharp}
        alt="decorative background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "300px",
          zIndex: -1,
        }}
      />
    </section>
  );
};

export default About;
``
