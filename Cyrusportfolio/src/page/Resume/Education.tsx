import {Row, Col, Container} from 'react-bootstrap';

const Education = () => {
  return (
    <section id="Education"   >
     <Container>
    <Row style={{marginRight:""}} >
      
    <Col className="p-2"  sm={12} md={6} lg={6}  >
    
    
       <Row >

      <h2 className='fs-4 '> Certifications</h2>
      </Row>
      <Row  className="Educationframe education" >
        <Col className="education ">
     
      <p className="education  fs-5">Jan 29, 2023</p>
    <p className="education fs-5 fw-medium">The Complete 2023 Web Development Bootcamp</p>
    <p className="fs-6 education ">Udemy  </p>
      </Col>
      </Row>
      <Row  className="Educationframe education" >
        <Col className="education">
      
      <p className=" fs-5 education">Jun 30, 2023</p>
    <p className="text-white fs-5 education">HTML, CSS & Python Django Fullstack for Web Development </p>
    <p className="fs-6 education"> Oak Academy </p>

    
      </Col>
      </Row>
      
      
     
    </Col>

    <Col className="p-2  " sm={12} md={6} lg={6} >
    

      <h2 className="fs-4 ">Education</h2>
    
      {/* <Row className="Educationframe  " >
        
  

        <Col className="education">
   
      
        <p className=" fs-5 education">Nov 2024 - Current</p>
    <p className="text-white fs-5 education">CS50's Introduction to Artificial Intelligence with Python
    </p>
    <p className="fs-6 education">Harvard University </p>
   </Col>
    
        
  
   
  </Row> */}
  <Row  className="Educationframe education" >
        <Col className="education">
      <p className=" fs-5 education">June, 2015</p>

    <p className="fs-5 education">B. Agric  </p>
    <p className="text-white fs-6 education">Prince Abubakar Audu University</p>
      </Col>
      </Row>
  </Col>
  </Row>
  </Container>
  </section>
  )
}

export default Education