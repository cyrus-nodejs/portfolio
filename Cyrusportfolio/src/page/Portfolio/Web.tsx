
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Web } from '../../utils/Projects';
import { Container, Row, Col } from 'react-bootstrap';
const WebImage = () => {
  return (
     <Container>
      <Row>
        {Web.map((item, index) => (
          <Col key={index} xs={4} sm={6} md={2} className="p-3">
       
               <LazyLoadImage
      alt="A sample image"
      height={200}
      effect="blur"
      src={item.image}
      width={100}
      className="all rounded-2"
    />
        
          </Col>
        ))}
      </Row>
    </Container>
    

  )
}

export default WebImage