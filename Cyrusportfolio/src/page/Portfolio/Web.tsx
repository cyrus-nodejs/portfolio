
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Web } from '../../utils/Projects';
import { Container, Row, Col } from 'react-bootstrap';
const WebImage = () => {
  return (
     <Container>
      <Row>
        {Web.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="p-5">
       
               <LazyLoadImage
      alt="A sample image"
      height={200}
      effect="blur"
      src={item.image}
      width={100}
      className="all"
    />
        
          </Col>
        ))}
      </Row>
    </Container>
    

  )
}

export default WebImage