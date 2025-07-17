
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { allweb} from '../../utils/Project/Darkmode';
import { allweb2 } from '../../utils/Project/LightMode';
import { useTheme } from "../../context/themecontext";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const WebImage = () => {
    const { darkMode} = useTheme();
  return (
     <Container>
      <Row>
        { darkMode ? (allweb.map((item, index) => (
          <Col key={index} xs={4} sm={6} md={2} className="p-3">
            <Link to={item.url}>
               <LazyLoadImage
      alt="A sample image"
      height={200}
      effect="blur"
      src={item.image}
      width={100}
      className="all img-bg p-3 rounded-2"
    />
        </Link>
          </Col>
        ))) : (allweb2.map((item, index) => (
          <Col key={index} xs={4} sm={6} md={2} className="p-3">
            <Link to={item.url}>
               <LazyLoadImage
      alt="A sample image"
      height={200}
      effect="blur"
      src={item.image}
      width={100}
      className="all img-bg p-3 rounded-2"
    />
        </Link>
          </Col>
        )))}
      </Row>
    </Container>
    

  )
}

export default WebImage