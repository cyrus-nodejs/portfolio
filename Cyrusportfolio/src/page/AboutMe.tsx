import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/images/Gemini_Generated_Image_3d07am3d07am3d07.png";
import colorSharp from "../assets/images/color-sharp.png";
import { Variants } from "framer-motion";

const About = () => {
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="about py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* ─────────────── Profile Image ─────────────── */}
          <div className="col-12 col-md-6 col-xl-5 mb-4 mb-md-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <img
                src={profileImg}
                alt="Emmanuel Adeyemi"
                className="img-fluid rounded-4 shadow-lg"
                style={{ maxHeight: "420px", objectFit: "cover" }}
              />
            </motion.div>
          </div>

          {/* ─────────────── About Text ─────────────── */}
          <div className="col-12 col-md-6 col-xl-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="about-text"
            >
              <motion.h2
                className="fw-bold mb-3 text-primary"
                style={{ fontSize: "2.2rem", letterSpacing: "-0.5px" }}
              >
                👋 About Me
              </motion.h2>

              <motion.p
                className="text-secondary mb-3"
                style={{ fontSize: "1.05rem", lineHeight: "1.7" }}
                transition={{ delay: 0.1 }}
              >
                I’m <strong className="text-dark">Emmanuel Adeyemi</strong>, a{" "}
                <strong className="text-dark">Full-Stack Software Engineer</strong>{" "}
                with a deep interest in <strong>AI integration</strong>,{" "}
                <strong>backend scalability</strong>, and{" "}
                <strong>clean system design</strong>.
              </motion.p>

              <motion.p
                className="text-secondary mb-3"
                style={{ fontSize: "1.05rem", lineHeight: "1.7" }}
                transition={{ delay: 0.2 }}
              >
                My toolkit includes <strong>React</strong>,{" "}
                <strong>Node.js</strong>, <strong>Python</strong>,{" "}
                <strong>TypeScript</strong>, and <strong>FastAPI</strong> —
                technologies I use to craft reliable, scalable, and efficient
                digital systems.
              </motion.p>

              <motion.p
                className="text-secondary mb-3"
                style={{ fontSize: "1.05rem", lineHeight: "1.7" }}
                transition={{ delay: 0.3 }}
              >
                I enjoy building <strong>AI-powered backends</strong> that bring
                intelligence to user experiences — from integrating{" "}
                <strong>OpenAI</strong> APIs to designing{" "}
                <strong>LangChain-based automation</strong> that scales
                effortlessly.
              </motion.p>

              <motion.p
                className="text-secondary mb-3"
                style={{ fontSize: "1.05rem", lineHeight: "1.7" }}
                transition={{ delay: 0.4 }}
              >
                Beyond code, I value <strong>clarity</strong>,{" "}
                <strong>collaboration</strong>, and{" "}
                <strong>craftsmanship</strong> in engineering. I believe great
                software balances precision and empathy — it’s built for people,
                not just for systems.
              </motion.p>

              <motion.p
                className="fw-semibold text-dark mt-4"
                style={{ fontSize: "1.15rem" }}
                transition={{ delay: 0.5 }}
              >
                🚀 My mission: Build intelligent, reliable systems that scale —
                with simplicity and purpose.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─────────────── Background Image ─────────────── */}
      <motion.img
        className="background-image-left"
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
