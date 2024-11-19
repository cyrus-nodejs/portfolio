
import Container from 'react-bootstrap/Container';
import { Row} from 'react-bootstrap';


import Appbar from './src/component/Appbar'
import Bio from "./src/page/Bio"
import Features from "./src/page/Features"
import Portfolio from "./src/page/Portfolio"
import Resume from "./src/page/Resume/Resume"
import Contact from "./src/page/Contact"
import Footer from "./src/component/Footer"
const Home = () => {
  return (
    <Container fluid >
      <Row>
        <Appbar />
         <Bio />
         <Features />
         <Portfolio />
         <Resume />
         <Contact />
         <Footer />
      

      </Row>
    </Container>
    
        
        
        
    
  )
}

export default Home;