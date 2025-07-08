
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Desktop} from '../../utils/Projects';

const DesktopImage = () => {
  return (
     <Container>
          <Row>
    
            { Desktop != null ? 
               ( Desktop.map((item) =>{
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
                })) : (<p className='center p-5'>Not Available Now</p>)
            }
  </Row>
    </Container>
  )
}

export default DesktopImage