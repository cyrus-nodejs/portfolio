/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect } from "react";
import  {Container, Image, Col, Row, Stack} from "react-bootstrap"


import profile from "../assets/images/cyruspics.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";


const Bio = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  //  const [open, setOpen] = useState(false);
  
  const toRotate : string [] = [ "FULLSTACK ", "MERN STACK", "NODE JS"  ];
  const period : number = 2000;

  useEffect(() => {
    const ticker = setInterval(() : void => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };

  }, [text])

  const tick = () : void => {
    const i : number = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText : string = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

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
    <Stack  gap={1}>
      <div className="p-2">
      <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <p className="fs-6 navpad fw-light">Welcome to my World</p>
                <p className="fs-1 fw-bold " >Hi, I'm <span className=" stack fs-1 fw-bold"> Emmanuel  Adeyemi</span> <p className="txt-rotate"   data-rotate='[ "Software Engineer"]'><p className="wrap fs-1 fw-bold ">a {text} DEVELOPER</p></p></p>
              </div>}
            </TrackVisibility>
      </div>
      <div className="p-2 ">
      <p className="fs-5 fw-medium  ">Tech-savy Fullstack developer proficient in  React Js frameworks and Node Js and Django at server-side. In depth Knowledge of Mysql, Mongodb, PostgreSQl. Analytical and precise professional with 2 years of hands-on experience taking charge of front & back end web development. Skillful creating servers and databases for functionality and designing and developing API. Hard working collaborator with track record of superior results
      </p>
 
      </div>
    </Stack>
    
    
    <Stack direction="horizontal" style={{marginTop:"100px"}} gap={3}>
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