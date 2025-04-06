

import { Container, Col,  Row } from 'react-bootstrap'
import Resumebox from "./Resumebox"

const Resume = () => {
  



  return (
<section id="Resume" className="section">
      <Container>
      <Row className='my-5'>
      <Col className="p-2">
        <Row className='my-3'>
  
      <h1 className="text-center stack">My Resume</h1>
      </Row>
        <Resumebox   />
        </Col>
    </Row>
     </Container>
    </section>
  )
}

export default Resume;