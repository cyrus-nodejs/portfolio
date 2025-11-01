/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import headerImg from "../assets/images/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';

import { useState, useEffect } from "react";
import { Container, Image, Col, Row, Stack } from "react-bootstrap"


import profile from "../assets/images/Tech baron II.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Bio = () => {
  const [isTruncated, setIsTruncated] = useState(true);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  //  const [open, setOpen] = useState(false);

  const toRotate: string[] = ['Software', 'Back End', 'Python', 'Node js' ];
  const period: number = 2000;

  useEffect(() => {
    const ticker = setInterval((): void => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };

  }, [text])

  const tick = (): void => {
    const i: number = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText: string = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
   
     <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Emmanuel`}, <span className="txt-rotate"  ><span className="wrap" >{text} Engineer</span></span></h1>
                  <p className='py-1'>I’m Emmanuel, a software engineer who enjoys turning ideas into scalable and reliable systems. I work primarily with Python (Django, FastAPI) and Node.js, building everything from robust web APIs, data pipelines, real-time applications to full-stack projects with React.</p>
                  <p className='py-1'>I’ve worked with tools like PostgreSQL, MongoDB, Redis, Docker, and Kubernetes, and I enjoy the challenge of designing systems that are both efficient and user-friendly.</p>
                  <p className='pu-1'>Outside of code, I like to learn new technologies, contribute to open source, and share insights from my engineering journey with others.</p>
                 <HashLink to='#connect'>  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button></HashLink>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Bio;