/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { useState, useEffect } from "react";
import { Container, Image, Col, Row, Stack } from "react-bootstrap"


import profile from "../assets/images/Tech baron II.png"
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

  const toRotate: string[] = ["Full Stack","Front End ",'Back End',  ];
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
    <section id="Bio" className="section pt-3">
      <Container className='pt-5' >
        <Row>
          <Col sm={12} md={6} lg={6}>
            <Stack gap={1}>
              <div className="p-2">
                <TrackVisibility>
                  {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <p className=" navpad fw-light">Welcome to my World</p>
                      <h2 className=" " >Hi, I'm <span className=" "> Emmanuel  Adeyemi</span> <h2 className="txt-rotate" data-rotate='[ "SOFTWARE ENGINEER"]'><h2 className="wrap ">a {text} developer</h2></h2></h2>
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
                  }}><p>I’m a passionate fullstack developer with 2 years of experience designing, developing, and maintaining scalable software solutions. I specialize in  full-stack web development, backend systems, mobile apps and I enjoy solving complex problems with clean, efficient code.</p>
     
                  <p>My approach combines solid engineering principles with creative problem-solving to deliver reliable and user-friendly products. I thrive in collaborative environments and continuously seek to learn new technologies and best practices to stay ahead in the ever-evolving tech landscape</p>
                </div>
                <button
                  className="btn bio-button mt-2"
                  onClick={() => setIsTruncated(!isTruncated)}
                >
                  {isTruncated ? 'Show More' : 'Show Less'}
                </button>
              </div>
            </Stack>


            <Stack direction="horizontal" style={{ marginTop: "100px" }} gap={3}>
              <div className="p-2">
                <Row>
                  <p className="">FIND  ME</p>
                  <Col className="socail p-1"><Link to="https://www.linkedin.com/in/emmanuel-adeyemi-464ba5227"><i className='bx bio-icon bxl-linkedin p-3 rounded  bx-sm'></i></Link></Col>
                  <Col className="socail p-1"><Link to="https://github.com/cyrus-nodejs"><i className='bx bio-icon bxl-github bx-border bx-sm p-3 rounded'></i></Link></Col>
                  <Col className="socail p-1"><Link to="https://x.com/cyrus_nodejs"><i className='bx bio-icon bxl-twitter p-3 rounded bx-sm'></i></Link></Col>

                </Row>
              </div>

            </Stack>
          </Col>
          <Col sm={12} md={6} lg={6}>
            {/* <Image src={profile} fluid className=" profile   object-fit-fill border border-success border-opacity-10 rounded" rounded /> */}
            <LazyLoadImage
                        alt="A sample image"
                        
                        effect="blur"
                        src={profile}
                          width="100%"
                        className="all  rounded-2 profile opacity-25  object-fit-fill border border-success border-opacity-10 rounded"
                     style={{
          zIndex: 0,
          opacity: 0.2, // make it faint
        }}
                      />
            
          </Col>
 

        </Row>
      </Container>
    </section>
  )
}

export default Bio;