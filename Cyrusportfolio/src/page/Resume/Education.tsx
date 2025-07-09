import {Row, Col, Container} from 'react-bootstrap';

const Education = () => {
  return (
    <section id="Education"   >
     <Container>
        <p className='fs-4    mt-2  text-center'>Education & Certification</p>
    <Row style={{marginRight:""}} >
       <Col className=""  sm={11} md={5} lg={5}  >
    
    
       <Row >

      <p className='fs-5  mt-2 ms-3'> Certifications</p>
      </Row>

      
      <Row  className="Educationframe education" >
        <Col className="education ">
     
  
    <p className="">The Complete 2023 Web Development Bootcamp</p>
    <p className=" ">Udemy  </p>
    <p className=""> 2023</p>
      </Col>
      </Row>
      <Row  className="Educationframe education" >
        <Col className="education">
      
        <p className=" ">HTML, CSS & Python Django Fullstack for Web Development </p>
        <p className=""> Oak Academy </p>
      <p className=" "> 2023</p>
   


    
      </Col>
      </Row>
      
      
     
    </Col>
  <Col  >
    <div className='vr vr-thick mx-3'  style={{height: '100%'}}></div>
  </Col>

    <Col className="  " sm={12} md={6} lg={6} >
    

      <p className=" fs-5  mt-2 ms-4">Education</p>
    

  <Row  className="Educationframe education" >
        <Col className="education">

    <p className=" ">BSc in Agriculture  </p>
    <p className=" ">Kogi State University, Nigeria</p>
    <p className="  "> 2015</p>
      </Col>
      </Row>
  </Col>
  </Row>
  </Container>
  </section>
  )
}

export default Education