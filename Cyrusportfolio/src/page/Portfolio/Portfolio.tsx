import WebImage from './WebApp/Web';
import DesktopImage from './Desktop/Desktop';
import MobileImage from './Mobile/Mobile';
import AllAppImage from './AllApp/AllApp';
import {Container ,Nav, Tab, Row} from 'react-bootstrap';
// import Projecbox from "./Project/Projectbox"
const Portfolio = () => {
  

  return (
    <section  id="Portfolio" className="  section">
    <Container className="pt-5">
      <Row className=''>
  
      <h2 className="text-center pt-3">Projects</h2>
      </Row>
    <Tab.Container id="left-tabs-example" defaultActiveKey="all"   >
      <Row>
          <Nav variant="tab" className="  "  >
            
            <Nav.Item className="port-menu rounded-2 m-1">
              <Nav.Link className=" text-reset " eventKey="all">All</Nav.Link>
            </Nav.Item>
            <Nav.Item className="port-menu rounded-2 m-1">
              <Nav.Link className="port-menu-dark text-reset" eventKey="desktop">Desktop App</Nav.Link>
            </Nav.Item>
            <Nav.Item className="port-menu rounded-2  m-1">
              <Nav.Link className="port-menu-dark text-reset" eventKey="mobile">Mobile App</Nav.Link>
            </Nav.Item >
             <Nav.Item className="port-menu rounded-2 m-1">
              <Nav.Link className="port-menu-dark text-reset" eventKey="web">Web App</Nav.Link>
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