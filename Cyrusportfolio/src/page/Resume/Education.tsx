import {Row, Col, Container} from 'react-bootstrap';

const Education = () => {
  return (
    <section id="Education"   >
     <Container>
    <Row style={{marginRight:""}} >
      
    <Col className=""  sm={12} md={6} lg={6}  >
    
    
       <Row >

      <h2 className='fs-4  mt-2 ms-3'> Certifications</h2>
      </Row>
      <Row  className="Educationframe education" >
        <Col className="education ">
     
  
    <p className="education fs-6">The Complete 2023 Web Development Bootcamp</p>
    <p className="fs-6 ">Udemy  </p>
    <p className="education  fs-6"> 2023</p>
      </Col>
      </Row>
      <Row  className="Educationframe education" >
        <Col className="education">
      
        <p className="text-white fs-6">HTML, CSS & Python Django Fullstack for Web Development </p>
        <p className="fs-6 "> Oak Academy </p>
      <p className=" fs-6"> 2023</p>
   


    
      </Col>
      </Row>
      
      
     
    </Col>

    <Col className="  " sm={12} md={6} lg={6} >
    

      <h2 className="fs-4    mt-2 ms-4">Education</h2>
    
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

    <p className="fs-6 ">BSc in Agriculture  </p>
    <p className="text-white fs-6 ">Prince Abubakar Audu University, Nigeria</p>
    <p className=" fs-6 "> 2015</p>
      </Col>
      </Row>
  </Col>
  </Row>
  </Container>
  </section>
  )
}

export default Education