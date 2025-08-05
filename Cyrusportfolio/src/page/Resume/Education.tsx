import {Row, Col, Container} from 'react-bootstrap';

const Education = () => {
  return (
    <section id="Education"   >
     <Container>
        <p className='fs-4    mt-2  text-center'>Education & Certification</p>
    <Row style={{marginRight:""}} >
       <Col className=""  sm={11} md={5} lg={5}  >
    
    
       <Row >

  
      </Row>

      
      <Row  className="Educationframe education" >
        <Col className="education ">
     
  
    <p className="fw-bold">Front End Development Libraries</p>
    <p className="fw-light ">Freecode Camp  </p>
    <p className=""> 2023</p>
      </Col>
      </Row>
      
        
      <Row  className="Educationframe education" >
        <Col className="education ">
     
  
    <p className="fw-bold">The Complete 2023 Web Development Bootcamp</p>
    <p className=" ">Udemy  </p>
    <p className=""> 2023</p>
      </Col>
      </Row>
     
    </Col>
  <Col  >
    <div className='vr vr-thick mx-3'  style={{height: '100%'}}></div>
  </Col>

    <Col className="  " sm={12} md={6} lg={6} >
    


 <Row  className="Educationframe education" >
        <Col className="education">
      
        <p className=" fw-bold">Complete Python Pro Bootcamp</p>
        <p className=""> App Brewrry </p>
      <p className=" "> 2023</p>
   


    
      </Col>
      </Row>
    

 <Row  className="Educationframe education" >
        <Col className="education">
      
        <p className=" fw-bold">HTML, CSS & Python Django Fullstack for Web Development </p>
        <p className=""> Oak Academy </p>
      <p className=" "> 2023</p>
   


    
      </Col>
      </Row>
      
  </Col>
  </Row>
  </Container>
  </section>
  )
}

export default Education