import {Nav, Col, Row} from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';

import Education from './Education';
// import Experience from './Experience';
import Skills from '../Skill/Skills';

const Resumebox = () => {

  

  return (
    <Row style={{ display:"flex"}}>
      <Col sm={12} >
       {/* <Tabs
      defaultActiveKey="Education"
      id="Education"
      className="mb-3 bg-dark text-light tab"
      justify
    >
      <Tab className="t" eventKey="Education" title="Education">
        <Education />
      </Tab>
      <Tab eventKey="Skills" title="Skills">
        <Skills />
      </Tab>
      <Tab eventKey="Experience" title="Experience">
        <Experience />
      </Tab>
    </Tabs> 
   */}
     <Tab.Container id=""  defaultActiveKey="first">
      <Row>
        <Col sm={12}>
          <Nav variant="tabs" className=""  as="li" justify>
          <Nav.Item>
              <Nav.Link eventKey="second" className="resumelink text-center">CODING SKILLS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="first" className="resumelink  text-center">CERTIFICATIONS</Nav.Link>
            </Nav.Item>
            
            {/* <Nav.Item>
              <Nav.Link eventKey="third" className="resumelink text-center text-outline-danger">Experience</Nav.Link>
            </Nav.Item> */}
          </Nav>
        
        
          <Tab.Content>
            <Tab.Pane eventKey="first"><Education/></Tab.Pane>
            <Tab.Pane eventKey="second"><Skills /></Tab.Pane>
            {/* <Tab.Pane eventKey="third"><Experience /></Tab.Pane> */}
          </Tab.Content>
          </Col>
      </Row>
    </Tab.Container> 
    </Col>
  </Row>
  )
}

export default Resumebox;