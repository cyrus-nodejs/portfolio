
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { AllApp} from '../../utils/Projects';

const AllAppImage = () => {
  return (
   <Container>
      <Row>
        {AllApp.map((item, index) => (
          <Col  key={index} xs={4} sm={6} md={2} className="p-3">
         <Link to={item.url}>
               <LazyLoadImage
      alt="A sample image"
      height={200}
      effect="blur"
      src={item.image}
      width={100}
      className="all m-2 rounded-2"
    /></Link>
          </Col>
        ))}
      </Row>
    </Container>
    
  )
}

export default AllAppImage