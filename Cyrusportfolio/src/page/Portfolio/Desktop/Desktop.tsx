import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { alldesktop } from '../../../utils/Project/Darkmode';
import { alldesktop2 } from '../../../utils/Project/LightMode';
import { useTheme } from '../../../context/themecontext';
import './Desktop.css';

interface ImageItem {
  url: string;
  image: string;
  title?: string;
  description?: string;
}

const DesktopImage: React.FC = () => {
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const data: ImageItem[] = theme === 'dark' ? alldesktop : alldesktop2;

  return (
    <Container>
      <Row>
        {data.map((item, index) => (
          <Col key={index} className="p-3" xs={12} sm={6}  md={4} lg={4} xl={4} xxs={3}>
            <div
              className={`card-wrapper ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link to={item.url}>
                <LazyLoadImage
                  alt={item.title || 'Image'}
                  src={item.image}
                  effect="blur"
                  width="100%"
                  height="100%"
                  className="card-image rounded"
                />
                <div className="card-overlay">
                  <h5 className="card-title">{item.title || 'Card Title'}</h5>
                  <p className="card-description">{item.description || 'Card description.'}</p>
                </div>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DesktopImage;
