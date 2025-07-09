
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Container, Row, Col } from 'react-bootstrap';
import {Mobile } from '../../utils/Projects';
import { Link } from 'react-router-dom';
const MobileImage = () => {
  return (
 <Container>
      <Row>
        {Mobile.map((item, index) => (
          <Col  key={index} xs={4} sm={4} md={2} className="p-3">
         <Link to={item.url}>
               <LazyLoadImage
      alt="A sample image"
      height={200}
      effect="blur"
      src={item.image}
      width={100}
      className="all  rounded-2"
    />
    </Link>
          </Col>
          
        ))}
      </Row>
    </Container>
  )
}

export default MobileImage