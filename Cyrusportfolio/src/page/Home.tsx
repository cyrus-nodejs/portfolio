
import Container from 'react-bootstrap/Container';
import { Row} from 'react-bootstrap';
import React, { useState } from 'react';

import Appbar from '../../src/component/Appbar'
import Bio from "../page/Bio"
import Features from "../page/Features"
import Portfolio from "./Portfolio/Portfolio"
import Resume from "../page/Resume/Resume"
import Contact from "../page/Contact"
import Footer from "../../src/component/Footer"

const Home = () => {


    const [darkMode, setDarkMode] = useState(false);
  return (
    <Container fluid >
      <Row>
        <Appbar darkMode={darkMode}  setDarkMode= {setDarkMode}/>
         <Bio />
         <Portfolio />
         <Features />
         <Resume />
         <Contact />
         <Footer />
      

      </Row>
    </Container>
    
        
        
        
    
  )
}

export default Home;