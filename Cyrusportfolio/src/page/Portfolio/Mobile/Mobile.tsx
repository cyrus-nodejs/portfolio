import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, Row, Col } from 'react-bootstrap';
import { allmobile } from '../../../utils/Project/Darkmode';
import { allmobile2 } from '../../../utils/Project/LightMode';
import { useTheme } from '../../../context/themecontext';
import { Link } from 'react-router-dom';
import './Mobile.css'; // Import overlay styles

interface MobileItem {
  url: string;
  image: string;
  title?: string;
  description?: string;
}

const MobileImage: React.FC = () => {
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const data: MobileItem[] = theme === 'dark'  ? allmobile : allmobile2;

  return (
    <Container>
      <Row>
        {data.map((item, index) => (
          <Col
            key={index}
            xs={6} sm={4}  md={3} lg={2} xl={2} xxl={2}
            className={`p-3 card-container ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link to={item.url}>
              <div className="card-wrapper rounded">
                <LazyLoadImage
                  alt={item.title || 'Mobile Image'}
                  height={200}
                  effect="blur"
                  src={item.image}
                  width={150}
                  className="card-image rounded"
                />
                <div className="card-overlay">
                  <p className="card-title mb-1">{item.title || 'Mobile App'}</p>
                  <p className="card-description">{item.description || 'Mobile app project description'}</p>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MobileImage;
