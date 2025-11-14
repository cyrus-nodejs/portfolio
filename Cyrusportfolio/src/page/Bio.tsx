/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import headerImg from "../assets/images/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';

const Bio = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate: string[] = ['Full Stack', 'Backend',  'Software'];
  const period: number = 2000;

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = (): void => {
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
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi, I'm Emmanuel Adeyemi — `}
                    <span className="txt-rotate">
                      <span className="wrap">{text} Engineer</span>
                    </span>
                  </h1>

                  <p className="py-2">
                    I’m a <strong> Software Engineer</strong> focused on
                    building <strong>scalable backend systems</strong> and integrating
                    <strong> AI & Machine Learning</strong> into modern web and mobile applications.
                  </p>

                  <p className="py-1">
                    I specialize in <strong>Python</strong>, <strong>Node.js</strong>, and
                    <strong> React</strong> — designing APIs, automations, and intelligent
                    workflows that power data-driven products.
                  </p>

                  <p className="py-1">
                    Passionate about performance, cloud scalability, and seamless AI integration.
                    Let’s turn ideas into systems that learn, scale, and deliver impact.
                  </p>

                  <HashLink to="#connect">
                    <button onClick={() => console.log('connect')}>
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </HashLink>
                </div>
              }
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <LazyLoadImage
                    src={headerImg}
                    alt="Header illustration"
                    effect="blur"
                    className="img-fluid"
                  />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Bio;