import { Container, Col, Row} from 'react-bootstrap';

const Experience = () => {

  return (
    <section id="Experience"  >
      <Container>
      <Row>
      <Row >
    
    <h2 className='fs-4    mt-2  text-center'>Work Experience</h2>
    </Row>
   
    <Col className="p-2"  sm={11} md={5} lg={5}  >
    <Row  className="Educationframe education"  >
    <Col className="education" sm={12}>
   
    <p className=" ">Upwork - Remote</p>
       <p className="fst-italic">2023 - present</p>
    <p>Delivered 15+ end-to-end web applications for clients across industries including e-commerce, education, and healthcare.</p>
    <p>Built responsive front-end interfaces using React, Next.js, Tailwind CSS, and TypeScript.</p>
   <p>Collaborated with clients through Agile workflows—managing tasks, sprints, and feedback loops via tools like Trello and Jira.</p>
    <p>Maintained high client satisfaction (90%+ job success score) through clear communication, quality code, and on-time delivery.</p>
    </Col>
  </Row>

  </Col>
  <Col  >
    <div className='vr'  style={{height: '100%'}}></div>
  </Col>

  
  
  
  <Col className="p-2  " sm={12} md={6} lg={6} >
  <Row  className="Educationframe education"  >
    <Col className="education" sm={12}>
     <p className="">Super Team - Remote </p>
    <p className="fst-italic">March 2024 - present</p>
    <p className="">Built responsive frontend interfaces with React.js, connecting to on-chain programs using Solana Web3.js and Anchor client.</p>
    <p>Integrated Web3 features such as token transfers, wallet authentication, and on-chain data visualization.</p>
    <p>Ensured dApp security using best practices around transaction simulation, input validation, and wallet permissions.</p>
    </Col>
  </Row>
      
      
  
      
  </Col>  
        
      </Row>
      </Container>
    </section>
    
  )
}

export default Experience