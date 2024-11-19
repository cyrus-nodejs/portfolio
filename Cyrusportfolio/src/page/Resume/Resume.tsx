

import { Container, Col,  Row } from 'react-bootstrap'
import Resumebox from "./Resumebox"

const Resume = () => {
  



  return (
<section id="Resume" className="section">
      <Container>
      <Row>
      <Col className="p-2">
        <Row>
  
      <h1 className="text-center">MY RESUME</h1>
      </Row>
        <Resumebox   />
        </Col>
    </Row>
     </Container>
    </section>
  )
}

export default Resume;