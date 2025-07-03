import WebImage from './Web';
import DesktopImage from './Desktop';
import MobileImage from './Mobile';
import AllAppImage from './AllApp';
import {Container ,Nav, Tab, Row} from 'react-bootstrap';
// import Projecbox from "./Project/Projectbox"
const Portfolio = () => {
  

  return (
    <section  id="Portfolio" className="  section">
    <Container className="mt-5">
      <Row className='my-3'>
  
      <h1 className="text-center ">Projects</h1>
      </Row>
    <Tab.Container id="left-tabs-example" defaultActiveKey="all"   >
      <Row>
          <Nav variant="tab" className="  "  >
            
            <Nav.Item className="border rounded-2 mx-1">
              <Nav.Link className=" text-reset " eventKey="all">All</Nav.Link>
            </Nav.Item>
            <Nav.Item className="border rounded-2 mx-1">
              <Nav.Link className="border-dark text-reset" eventKey="desktop">Desktop App</Nav.Link>
            </Nav.Item>
            <Nav.Item className="border rounded-2  mx-1">
              <Nav.Link className="border-dark text-reset" eventKey="mobile">Mobile App</Nav.Link>
            </Nav.Item >
             <Nav.Item className="border rounded-2 mx-1">
              <Nav.Link className="border-dark text-reset" eventKey="web">Web App</Nav.Link>
            </Nav.Item>
          </Nav>
      
      
          <Tab.Content className=" ">
            <Tab.Pane eventKey="all"><AllAppImage /></Tab.Pane>
            <Tab.Pane eventKey="mobile"><MobileImage /></Tab.Pane>
            <Tab.Pane eventKey="web"><WebImage /></Tab.Pane>
            <Tab.Pane eventKey="desktop"><DesktopImage/></Tab.Pane>

          </Tab.Content>

      </Row>
      
    </Tab.Container>
    </Container>
    </section>
  )
}

export default Portfolio