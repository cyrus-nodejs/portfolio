import {Row, Col, Container} from 'react-bootstrap';

const Education = () => {
  return (
    <section id="Education"   >
     <Container>
        <h2 className='fs-4    mt-2  text-center'>Education & Certification</h2>
    <Row style={{marginRight:""}} >
       <Col className=""  sm={11} md={5} lg={5}  >
    
    
       <Row >

      <h2 className='  mt-2 ms-3'> Certifications</h2>
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
      
        <p className="text-white ">HTML, CSS & Python Django Fullstack for Web Development </p>
        <p className=""> Oak Academy </p>
      <p className=" "> 2023</p>
   


    
      </Col>
      </Row>
      
      
     
    </Col>
  <Col  >
    <div className='vr'  style={{height: '100%'}}></div>
  </Col>

    <Col className="  " sm={12} md={6} lg={6} >
    

      <h2 className="   mt-2 ms-4">Education</h2>
    

  <Row  className="Educationframe education" >
        <Col className="education">

    <p className=" ">BSc in Agriculture  </p>
    <p className="text-white ">Kogi State University, Nigeria</p>
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