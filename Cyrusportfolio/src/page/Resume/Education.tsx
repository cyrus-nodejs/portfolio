import {Row, Col, Container} from 'react-bootstrap';

const Education = () => {
  return (
    <section id="Education"   >
     <Container>
    <Row style={{marginRight:""}} >
      
    <Col className="p-2"  sm={12} md={6} lg={6}  >
    
    
       <Row >
      <h6 className="color">2022 - present</h6>
      <h2 className='fs-2 '> Certifications</h2>
      </Row>
      <Row  className="Educationframe education" >
        <Col className="education ">
     
      <p className="education  fw-medium fs-5">2022</p>
    <p className="education fs-4 fw-medium">The Complete 2022 Web Development Bootcamp</p>
    <p className="fs-6 education ">Udemy  </p>
      </Col>
      </Row>
      <Row  className="Educationframe education" >
        <Col className="education">
      
      <p className=" fw-medium fs-5 education">2023</p>
    <p className="text-white fs-4 fw-medium education">Legacy Javscript ALgorithms & Data Structure </p>
    <p className="fs-6 education">FreeCode Camp,  </p>

    
      </Col>
      </Row>
      <Row  className="Educationframe education" >
      <Col className="education">
      <p className=" fw-medium fs-5 education">Current</p>
    <p className="text-white fs-4 fw-medium education">CS50's Introduction to Artificial Intelligence with Python
    </p>
    <p className="fs-6 education">Harvard University </p>
      </Col>
      
      </Row>
      
      {/* <Row  className="Educationframe education">
       
      </Row>
     */}
    
      
     
    </Col>

    <Col className="p-2  " sm={12} md={6} lg={6} >
    
      <h6 className="color  fs-6">2015</h6>
      <h2 className="fs-2 ">Education</h2>
    
      <Row className="Educationframe  " >
        
  

        <Col className="education">
   
      
   <p className=" fw-medium  education fs-5">2015</p>
 <p className="text-white education fs-4 fw-medium">Prince Abubakar Audu University </p>
 <p className="fs-6 education fw-medium">B. Agric </p>
   </Col>
    
        

   
  </Row>
  </Col>
  </Row>
  </Container>
  </section>
  )
}

export default Education