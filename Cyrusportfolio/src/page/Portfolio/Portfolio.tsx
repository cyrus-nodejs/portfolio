import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { ProjectCard } from "./ProjectCard";
import { projects } from "./projects.config";
import { containerVariants, cardVariants } from "../../hooks/motion/motionVariant";

import colorSharp2 from "../../assets/images/color-sharp2.png";

const tabs = [
  { key: "web", label: "Web Projects" },
  { key: "mobile", label: "Mobile" },
  { key: "desktop", label: "Desktop" },
] as const;

const Portfolio = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="project position-relative overflow-hidden" id="project">
      <Container>
        <Row>
          <Col>
            {/* Header */}
            <motion.header
              className="text-center mb-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold">Technical Projects Portfolio</h2>
              <p className="text-secondary mx-auto" style={{ maxWidth: 760 }}>
                Each project blends deep backend expertise with scalable architecture and measurable product impact.
              </p>
            </motion.header>

            {/* Tabs */}
            <Tab.Container defaultActiveKey="web">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center flex-wrap"
              >
                {tabs.map((tab) => (
                  <Nav.Item key={tab.key}>
                    <Nav.Link eventKey={tab.key}>{tab.label}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>

              {/* Tab Content */}
              <Tab.Content>
                {tabs.map((tab) => {
                  const filteredProjects = projects.filter((p) =>
                    p.categories.includes(tab.key)
                  );

                  return (
                    <Tab.Pane eventKey={tab.key} key={tab.key}>
                      <motion.div
                        className="row g-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {filteredProjects.map((project, index) => {
                          const id = `${tab.key}-${index}`;

                          return (
                            <motion.div
                              key={id}
                              className="col-12 col-md-6 col-lg-4"
                              variants={cardVariants}
                              whileHover={prefersReducedMotion ? undefined : "hover"}
                              layout
                            >
                              <ProjectCard
                                {...project}
                                isExpanded={expandedId === id}
                                onExpand={() => handleExpand(id)}
                              />
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </Tab.Pane>
                  );
                })}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

      {/* Decorative Background */}
      <motion.img
        src={colorSharp2}
        alt=""
        aria-hidden="true"
        className="position-absolute end-0 top-50 translate-middle-y opacity-25"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: prefersReducedMotion ? 0 : 1 }}
        viewport={{ once: true }}
      />
    </section>
  );
};

export default Portfolio;
