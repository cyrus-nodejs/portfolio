/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import headerImg from "../assets/images/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";

const Bio = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate: string[] = ["Fullstack", "Backend", "Software"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) setDelta((prev) => prev / 2);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section id="home" className="banner py-5">
      <Container>
        <Row className="align-items-center g-5">
          {/* LEFT — CONTENT */}
          <Col lg={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeInUp"
                      : ""
                  }
                >
                  <span className="tagline mb-3 d-inline-block">
                    👋 Welcome to my portfolio
                  </span>

                  <h1 className="display-5 fw-bold mb-3">
                    Hi, I’m{" "}
                    <span className="text-primary">Emmanuel Adeyemi</span>
                  </h1>

                  <h2 className="mb-4 text-light">
                    <span className="txt-rotate">
                      <span className="wrap">
                        {text} Engineer
                      </span>
                    </span>
                  </h2>

                  <p className="text-secondary mb-3">
                    I’m a <strong>Full-Stack Engineer</strong> who builds secure,
                    scalable, and user-focused web applications.
                  </p>

                  <p className="text-secondary mb-4">
                    From crafting responsive frontends to designing robust backend
                    APIs, authentication systems, and database architectures — I
                    focus on clean code, performance, and production-ready systems.
                  </p>

                  <HashLink to="#connect" className="text-decoration-none">
                    <Button
                      variant="primary"
                      size="lg"
                      className="d-inline-flex align-items-center gap-2"
                    >
                      Let’s Connect <ArrowRightCircle size={22} />
                    </Button>
                  </HashLink>
                </div>
              )}
            </TrackVisibility>
          </Col>

          {/* RIGHT — VISUAL */}
          <Col lg={5} className="text-center">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn"
                      : ""
                  }
                >
                  <LazyLoadImage
                    src={headerImg}
                    alt="Developer illustration"
                    effect="blur"
                    className="img-fluid"
                    style={{ maxWidth: "420px" }}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Bio;
