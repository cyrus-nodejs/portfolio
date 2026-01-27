import { Container, Row, Col, Button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HashLink } from "react-router-hash-link";
import { motion, useReducedMotion } from "framer-motion";

import { useTypewriter } from "../hooks/useTypewriter";
import { fadeUp, zoomIn } from "../hooks/motion/motionVariant";

import headerImg from "../assets/images/header-img.svg";

const Bio = () => {
  const prefersReducedMotion = useReducedMotion();

  const text = useTypewriter({
    words: ["Fullstack", "Backend", "Software"],
  });

  return (
    <section id="home" className="banner min-vh-100 d-flex align-items-center py-5">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={7}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{
                duration: prefersReducedMotion ? 0 : 0.6,
                ease: "easeOut",
              }}
            >
              <span className="tagline">👋 Welcome to my portfolio</span>

              <h1 className="display-4 fw-bold mt-3">
                Hi, I’m <span className="text-primary">Emmanuel Adeyemi</span>
              </h1>

             <p className="hero-text">
  I build secure, scalable web and mobile applications, combining
  polished interfaces with resilient backend architectures.
</p>
              <p className="hero-text">
                I build secure, scalable, and user-focused web applications —
                from polished frontends to robust backend systems.
              </p>

              <HashLink to="#connect">
                <Button size="lg" className="mt-4">
                  Let’s Connect <ArrowRightCircle size={22} />
                </Button>
              </HashLink>
            </motion.div>
          </Col>

          <Col lg={5} className="d-none d-lg-block text-center">
            <motion.div
              variants={zoomIn}
              initial="hidden"
              animate="visible"
              transition={{
                duration: prefersReducedMotion ? 0 : 0.7,
              }}
            >
              <LazyLoadImage
                src={headerImg}
                alt="Illustration of Emmanuel Adeyemi working"
                effect="blur"
                width={450}
                height={450}
                className="img-fluid floating-animation"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Bio;
