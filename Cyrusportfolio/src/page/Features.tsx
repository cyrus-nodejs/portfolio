
import { Container, Col, Row } from 'react-bootstrap'
import Skillbox from './Skill/SkillBox'

const Features = () => {
  return (
    <section id="Features">
      <Container >
      <Row className='my-5'>

      <h1 className="text-center stack">What I Do</h1>
      <h6 className=" navpad text-center">SKILLS</h6>
      <Col className="p-2">
    
        <Skillbox  />
        </Col>
    </Row>
     </Container>
    </section>
  )
}

export default Features