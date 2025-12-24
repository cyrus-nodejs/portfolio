
import { motion, Variants } from "framer-motion";
import colorSharp from "../../assets/images/color-sharp.png";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-5 position-relative">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="fw-bold mb-3">⚙️ Skills & Expertise</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: 760 }}>
            I specialize in building scalable full-stack systems and AI-powered
            products, combining clean architecture with performance-focused
            engineering.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="row g-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Frontend */}
          <motion.div className="col-md-6" variants={fadeIn}>
            <div className="p-4 bg-dark text-light rounded-4 h-100 shadow-sm">
              <h5 className="fw-semibold mb-2">🧩 Frontend</h5>
              <p className="small text-secondary mb-0">
                Next.js, React, TypeScript, Tailwind CSS, shadcn/ui,
                Framer Motion, Redux Toolkit, responsive and accessible UI.
              </p>
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div className="col-md-6" variants={fadeIn}>
            <div className="p-4 bg-dark text-light rounded-4 h-100 shadow-sm">
              <h5 className="fw-semibold mb-2">🧩 Backend</h5>
              <p className="small text-secondary mb-0">
                Python NestJS, ExpressJs, FastAPI,
                Django, building secure, scalable APIs and services.
              </p>
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div className="col-md-6" variants={fadeIn}>
            <div className="p-4 bg-dark text-light rounded-4 h-100 shadow-sm">
              <h5 className="fw-semibold mb-2">🗄️ Databases & Data</h5>
              <p className="small text-secondary mb-0">
                PostgreSQL, MongoDB, Redis, MySQL with Prisma ORM.
                Focused on indexing, caching, and query optimization.
              </p>
            </div>
          </motion.div>

          {/* DevOps */}
          <motion.div className="col-md-6" variants={fadeIn}>
            <div className="p-4 bg-dark text-light rounded-4 h-100 shadow-sm">
              <h5 className="fw-semibold mb-2">☁️ DevOps & Cloud</h5>
              <p className="small text-secondary mb-0">
                Docker, GitHub Actions, AWS, Render, Netlify.
                CI/CD pipelines, automated deployments, zero-downtime releases.
              </p>
            </div>
          </motion.div>

          {/* AI */}
          <motion.div className="col-md-6" variants={fadeIn}>
            <div className="p-4 bg-dark text-light rounded-4 h-100 shadow-sm">
              <h5 className="fw-semibold mb-2">🤖 AI Integrations</h5>
              <p className="small text-secondary mb-0">
                OpenAI APIs, LangChain, embeddings, recommendation systems,
                and intelligent automation features.
              </p>
            </div>
          </motion.div>

          {/* Engineering */}
          <motion.div className="col-md-6" variants={fadeIn}>
            <div className="p-4 bg-dark text-light rounded-4 h-100 shadow-sm">
              <h5 className="fw-semibold mb-2">🧠 Engineering Principles</h5>
              <p className="small text-secondary mb-0">
                Clean architecture, system design, algorithms, testing,
                maintainable and scalable codebases.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Background */}
      <motion.img
        src={colorSharp}
        alt=""
        className="position-absolute top-0 start-0 opacity-25"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ maxWidth: 300 }}
      />
    </section>
  );
};

export default Skills;
