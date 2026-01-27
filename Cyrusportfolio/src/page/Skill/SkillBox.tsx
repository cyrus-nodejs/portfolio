import { motion, useReducedMotion } from "framer-motion";
import colorSharp from "../../assets/images/color-sharp.png";

import { skills, dailyTools } from "./skills.config";
import { containerVariants, cardVariants } from "../../hooks/motion/motionVariant";

const Skills = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="py-5 position-relative overflow-hidden"
    >
      <div className="container">
        {/* Header */}
        <motion.header
          className="text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h2 className="fw-bold mb-3">⚙️ Skills & Expertise</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: 760 }}>
            I specialize in building scalable full-stack systems and AI-powered
            products—combining clean architecture with performance-focused
            engineering.
          </p>
        </motion.header>

        {/* Skills Grid */}
        <motion.div
          className="row g-4 mb-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skills.map(({ title, icon: Icon, description }) => (
            <motion.div
              key={title}
              className="col-md-6"
              variants={cardVariants}
              whileHover={prefersReducedMotion ? undefined : "hover"}
            >
              <div className="p-4 bg-dark text-light rounded-4 h-100 skill-card">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <Icon size={22} className="text-primary" />
                  <h5 className="fw-semibold mb-0">{title}</h5>
                </div>

                <p className="small text-secondary mb-0">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools I Use Daily */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="fw-semibold mb-3">
            <span className="me-2">🛠️</span>Tools I Use Daily
          </h4>

          <div className="d-flex flex-wrap justify-content-center gap-2">
            {dailyTools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-pill bg-dark text-light small border border-secondary-subtle"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Background */}
      <motion.img
        src={colorSharp}
        alt=""
        aria-hidden
        className="position-absolute top-0 start-0 opacity-25"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: prefersReducedMotion ? 0 : 1 }}
        viewport={{ once: true }}
        style={{ maxWidth: 300 }}
      />
    </section>
  );
};

export default Skills;
