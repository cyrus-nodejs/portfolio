import {Col, Row, Form, ProgressBar} from 'react-bootstrap';



const Skills = () => {
  return (
    <section id="Skills"  >
    <Row >
    <Col sm={12} md={6} lg={6} className="p-3 Education" >
    <Row >
      <div className="p-2 fs-6 text-secondary"></div>
       <div className="p-2 fs-2 ">Technical Skill</div>
      <div className="p-2 fs-6">
       <Form.Label>OOD</Form.Label>
       <ProgressBar  now={90} label="90%" variant="secondary" />
      </div>
      <div className="p-2 f">
      <Form.Label>RESPONSIVE WEB DESIGN</Form.Label>
      <ProgressBar  now={95} label="95%"  variant="secondary" />
      </div>
      <div className="p-2">
      <Form.Label>CI/CD</Form.Label>
      <ProgressBar  now={100} label="100%" variant="secondary" />
      </div>
      <div className="p-2">
      <Form.Label>API</Form.Label>
      <ProgressBar  now={100} label="100%" variant="secondary" />
      </div>
      <div className="p-2">
      <Form.Label> TESTING</Form.Label>
      <ProgressBar  now={90} label="90%" variant="secondary" />
      </div>
      <div className="p-2">
      <Form.Label>DATA STRUCTURE</Form.Label>
      <ProgressBar  now={90} label="90%" variant="secondary" />
      </div>
    </Row>
    
    </Col>
    <Col className="p-3   Education " sm={12} md={6} lg={6}>
    <Row >
      
       <div className="p-2 fs-2 ">Coding Skill</div>
       <div className="p-2">
      <Form.Label>TYPESCRIPT</Form.Label>
      <ProgressBar  now={90} label="90%" variant="secondary" />
      </div>
      <div className="p-2">
      <Form.Label>PYTHON</Form.Label>
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
      <Form.Label>JAVASCRIPT</Form.Label>
      <ProgressBar  now={90} label="90%" variant="secondary" />
      </div>
      <div className="p-2 fs-6">
       <Form.Label>REACT JS</Form.Label>
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
      <div className="p-2">
      <Form.Label>REDUX</Form.Label>
      <ProgressBar  now={100} label="100%" variant="secondary" />
      </div>
    </Row>
       
    
    </Col>
   
  </Row>
  </section>
  )
}

export default Skills;