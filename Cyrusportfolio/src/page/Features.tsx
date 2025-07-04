
import { Container, Col, Row } from 'react-bootstrap'
import Skillbox from './Skill/SkillBox'

const Features = () => {
  return (
    <section id="Features">
      <Container className='py-5' >
      <Row className=''>

      <h2 className="text-center pt-3">What I Do</h2>
   
      <Col className="p-2">
    
        <Skillbox  />
        </Col>
    </Row>
     </Container>
    </section>
  )
}

export default Features