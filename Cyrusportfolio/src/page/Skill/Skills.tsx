import {Col, Row, Form, ProgressBar} from 'react-bootstrap';


import  { useState, useEffect } from 'react';



const Skills = () => {
   const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 500); // update every 100ms

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="Skills"  >
    <Row >
    <Col sm={12} md={6} lg={6} className="p-3 Education" >
    <Row >

       <p className="p-2 fs-5">Front End</p>
      <div className="p-2 fs-6">
       <Form.Label>React</Form.Label>
       <ProgressBar className='progress-bar'   animated now={progress} label={`${progress}%`} />
      </div>
      <div className="p-2 f">
      <Form.Label>Redux</Form.Label>
      <ProgressBar  animated now={progress} label={`${progress}%`} className='progress-bar'  variant="" />
      </div>
      <div className="p-2">
      <Form.Label>Typescript</Form.Label>
      <ProgressBar  animated now={progress} label={`${progress}%`} className='progress-bar' variant="" />
      </div>
      <div className="p-2">
      <Form.Label>Bootstrap</Form.Label>
      <ProgressBar  animated now={progress} label={`${progress}%`} className='progress-bar' variant="" />
      </div>
      <div className="p-2">
      <Form.Label> Tailwind Css</Form.Label>
      <ProgressBar  animated now={progress} label={`${progress}%`} className='progress-bar' variant="" />
      </div>
      <div className="p-2">
      <Form.Label>HTML</Form.Label>
      <ProgressBar  animated now={progress} label={`${progress}%`} className='progress-bar' variant="" />
      </div>
    </Row>
    
    </Col>
    <Col className="p-3   Education " sm={12} md={6} lg={6}>
    <Row >
      
       <p className="p-2 fs-5 ">Back End</p>
       <div className="p-2">
      <Form.Label>Python</Form.Label>
      <ProgressBar  animated now={progress} label={`${progress}%`} variant="" className='progress-bar' />
      </div>
      <div className="p-2">
      <Form.Label>Typescript </Form.Label>
      <ProgressBar  animated now={progress} label={`${progress}%`} className='progress-bar' variant="" />
      </div>
      <div className="p-2">
      <Form.Label>Express Js</Form.Label>
      <ProgressBar animated now={progress} label={`${progress}%`} className='progress-bar' variant="" />
      </div>
      <div className="p-2">
      <Form.Label>Django</Form.Label>
      <ProgressBar  animated now={progress} label={`${progress}%`} className='progress-bar' variant="" />
      </div>
      <div className="p-2">
      <Form.Label>Nodejs</Form.Label>
      <ProgressBar  animated now={progress} label={`${progress}%`} className='progress-bar' variant="" />
      </div>
      <div className="p-2 fs-6">
       <Form.Label>Postgresql</Form.Label>
       <ProgressBar animated now={progress} label={`${progress}%`} className='progress-bar' variant="" />
      </div>
      
     
     
    </Row>
       
    
    </Col>
   
  </Row>
  </section>
  )
}

export default Skills;