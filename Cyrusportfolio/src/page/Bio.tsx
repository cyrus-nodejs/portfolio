/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect } from "react";
import { Container, Image, Col, Row, Stack } from "react-bootstrap"


import profile from "../assets/images/cyruspics.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";


const Bio = () => {
  const [isTruncated, setIsTruncated] = useState(true);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  //  const [open, setOpen] = useState(false);

  const toRotate: string[] = ["MERN STACK ", "BACKEND "];
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
    <section id="Bio" className="section">
      <Container >
        <Row>
          <Col sm={12} md={6} lg={6}>
            <Stack gap={1}>
              <div className="p-2">
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <p className="fs-3 navpad fw-light">Welcome to my World</p>
                      <p className="fs-1 fw-bold " >Hi, I'm <span className=" stack fs-1 fw-bold"> Emmanuel  Adeyemi</span> <p className="txt-rotate" data-rotate='[ "Software Engineer"]'><p className="wrap fs-1 fw-bold ">a {text} DEVELOPER</p></p></p>
                    </div>}
                </TrackVisibility>
              </div>
              <div className="p-2 ">
                <div className={`${isTruncated ? "truncate-text   fs-6" : "fs-6  "
                  }`}
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitLineClamp: isTruncated ? 4 : 'unset',  // Truncate to 3 lines or show all
                  }}><p>I am a passionate and versatile Software Engineer with a strong proficiency in building dynamic, high-performance web applications. With hands-on expertise in both the MERN stack , Python(Django), I craft seamless user experiences and robust back-end services.</p>
                  <p>I thrive in fast-paced environments, blending creativity with technical expertise to build solutions that deliver both on the front-end and back-end. Whether designing a user-friendly interface in React or creating powerful, scalable backend systems with Node.js, Django and Rust, my goal is to bring ideas to life through seamless integration of all layers of the stack.</p>

                </div>
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => setIsTruncated(!isTruncated)}
                >
                  {isTruncated ? 'Show More' : 'Show Less'}
                </button>
              </div>
            </Stack>


            <Stack direction="horizontal" style={{ marginTop: "100px" }} gap={3}>
              <div className="p-2">
                <Row>
                  <p className="fs-6">FIND  ME</p>
                  <Col className="socail p-1"><Link to="https://www.linkedin.com/in/emmanuel-adeyemi-464ba5227"><i className='bx bxl-linkedin bx-border border border-light  bx-sm'></i></Link></Col>
                  <Col className="socail p-1"><Link to="https://github.com/cyrus-nodejs"><i className='bx bxl-github bx-border bx-sm border border-light'></i></Link></Col>
                  <Col className="socail p-1"><Link to="https://x.com/cyrus_nodejs"><i className='bx bxl-twitter bx-border border border-light bx-sm'></i></Link></Col>

                </Row>
              </div>

            </Stack>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Image src={profile} fluid className=" profile   object-fit-fill border border-success border-opacity-10 rounded" rounded />
          </Col>


        </Row>
      </Container>
    </section>
  )
}

export default Bio;