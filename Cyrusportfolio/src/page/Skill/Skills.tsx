import {Col, Row, Form, ProgressBar} from 'react-bootstrap';



const Skills = () => {
  return (
    <section id="Skills"  >
    <Row >
    <Col sm={12} md={6} lg={6} className="p-3 Education" >
    <Row >

       <div className="p-2 fs-2 ">FRONT END</div>
      <div className="p-2 fs-6">
       <Form.Label>TYPESCRIPT</Form.Label>
       <ProgressBar  now={90} label="90%" variant="secondary" />
      </div>
      <div className="p-2 f">
      <Form.Label>REDUX</Form.Label>
      <ProgressBar  now={95} label="95%"  variant="secondary" />
      </div>
      <div className="p-2">
      <Form.Label>REACT</Form.Label>
      <ProgressBar  now={100} label="100%" variant="secondary" />
      </div>
      <div className="p-2">
      <Form.Label>JAVASCRIPT</Form.Label>
      <ProgressBar  now={100} label="100%" variant="secondary" />
      </div>
      <div className="p-2">
      <Form.Label> TAILWIND CSS</Form.Label>
      <ProgressBar  now={90} label="90%" variant="secondary" />
      </div>
      <div className="p-2">
      <Form.Label>HTML</Form.Label>
      <ProgressBar  now={90} label="90%" variant="secondary" />
      </div>
    </Row>
    
    </Col>
    <Col className="p-3   Education " sm={12} md={6} lg={6}>
    <Row >
      
       <div className="p-2 fs-2 ">BACK END</div>
       <div className="p-2">
      <Form.Label>PYTHON</Form.Label>
      <ProgressBar  now={90} label="90%" variant="secondary" />
      </div>
      <div className="p-2">
      <Form.Label>RUST</Form.Label>
      <ProgressBar  now={90} label="90%" variant="secondary" />
      </div>
      <div className="p-2">
      <Form.Label>NODE JS</Form.Label>
      <ProgressBar  now={90} label="90%" variant="secondary" />
      </div>
      <div className="p-2">
      <Form.Label>DJANGO</Form.Label>
      <ProgressBar  now={90} label="90%" variant="secondary" />
      </div>
      <div className="p-2">
      <Form.Label>ANCHOR</Form.Label>
      <ProgressBar  now={90} label="90%" variant="secondary" />
      </div>
      <div className="p-2 fs-6">
       <Form.Label>EXPRESS</Form.Label>
       <ProgressBar  now={100} label="100%" variant="secondary" />
      </div>
      
     
      {/* <div className="p-2">
      <Form.Label>HTML</Form.Label>
      <ProgressBar  now={100} label="100%" variant="secondary" />
      </div>
      
      <div className="p-2">
      <Form.Label>CSS</Form.Label>
      <ProgressBar  now={100} label="100%" variant="secondary" />
      </div>
      

      <div className="p-2">
      <Form.Label>BOOTSTRAP</Form.Label>
      <ProgressBar  now={100} label="100%" variant="secondary" />
      </div> */}
      {/* <div className="p-2">
      <Form.Label>REDUX</Form.Label>
      <ProgressBar  now={100} label="100%" variant="secondary" />
      </div> */}
    </Row>
       
    
    </Col>
   
  </Row>
  </section>
  )
}

export default Skills;