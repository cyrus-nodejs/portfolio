
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { alldesktop} from '../../utils/Project/Darkmode';
import { alldesktop2 } from '../../utils/Project/LightMode';
import { useTheme } from "../../context/themecontext";

const DesktopImage = () => {

    const { darkMode} = useTheme();
  return (
     <Container>
          <Row>
    
            { darkMode ? 
               ( alldesktop.map((item) =>{
                    return(
               <Col className='p-3'>
                <Link to={item.url}>
                    <LazyLoadImage
                        alt="A sample image"
                        height="100%"
                          width="100%"
                        effect="blur"
                        src={item.image}
                        
                        className="all  rounded-2"
                      />
                      </Link>
                             </Col>
                             
                    )
                })) : ( alldesktop2.map((item) =>{
                    return(
               <Col className='p-3'>
                <Link to={item.url}>
                    <LazyLoadImage
                        alt="A sample image"
                        height="100%"
                          width="100%"
                        effect="blur"
                        src={item.image}
                        
                        className="all  rounded-2"
                      />
                      </Link>
                             </Col>
                             
                    )
                }))
            }
  </Row>
    </Container>
  )
}

export default DesktopImage