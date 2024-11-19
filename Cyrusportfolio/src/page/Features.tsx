
import { Container, Col, Row } from 'react-bootstrap'
import Skillbox from './Skill/SkillBox'

const Features = () => {
  return (
    <section id="Features">
      <Container >
      <Row>
      <h6 className="color navpad text-center">SKILLS</h6>
      <h1 className="text-center">What I Do</h1>
      <Col className="p-2">
    
        <Skillbox  />
        </Col>
    </Row>
     </Container>
    </section>
  )
}

export default Features