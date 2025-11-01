
import Container from 'react-bootstrap/Container';
import { Row} from 'react-bootstrap';


import Appbar from '../component/Navbar'
import Bio from "../page/Bio"
import Features from "../page/Features"
import Portfolio from "./Portfolio/Portfolio"
import BlogSection from './Blog/Blogsection';
// import Resume from "../page/Resume/Resume"
import Contact from "../page/Contact"
import Footer from "../../src/component/Footer"
 import About from './AboutMe';
const Home = () => {


  
  return (
    <Container fluid >
      <Row>
        <Appbar />
         <Bio />
           <Features />
         <Portfolio />
          <About />
            <BlogSection />
         <Contact />
      
         <Footer />
      

      </Row>
    </Container>
    
        
        
        
    
  )
}

export default Home;