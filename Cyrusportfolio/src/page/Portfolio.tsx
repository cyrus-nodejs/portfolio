

import { Container, Col } from 'react-bootstrap'
import Projecbox from "./Project/Projectbox"
const Portfolio = () => {
  return (
    <section id="Portfolio" className="  section">
      <Container >
      <Col className='my-5' >
      <h1 className="text-center stack">My Portfolio</h1>
      <h6 className="color navpad text-center">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h6>
      
        <Projecbox  />
        
    </Col>
     </Container>
    </section>
  )
}

export default Portfolio