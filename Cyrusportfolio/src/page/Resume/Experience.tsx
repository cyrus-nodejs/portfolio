import { Container, Col, Row} from 'react-bootstrap';

const Experience = () => {

  return (
    <section id="Experience"  >
      <Container>
      <Row>
      <Row >
    
    <h2 className='fs-2 text-center'>Work Experience </h2>
    </Row>
    <Col className="p-2"  sm={12} md={6} lg={6}  >
     
     
    <Row  className="Educationframe education"  >
    <Col className="education" sm={12}>
      <p className="stack education fw-medium fs-5">2022 - Current</p>
    <p className="text-white education fs-5 ">Upwork </p>
    <p className="fs-5 education">MERN Developer</p>
    </Col>
  </Row>

   
  </Col>

  <Col className="p-2  " sm={12} md={6} lg={6} >
  
    
  
  <Row  className="Educationframe education"  >
    <Col className="education" sm={12}>
    <p className="stack fw-medium education fs-5">March 2024 - Current</p>
    <p className="text-white education fs-5">Super Team Global </p>
    <p className="fs-5 education">Fullstack Developer</p>
    </Col>
  </Row>
      
      
  
      
  </Col>  
        
      </Row>
      </Container>
    </section>
    
  )
}

export default Experience