import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { allweb } from '../../../utils/Project/Darkmode';
import { allweb2 } from '../../../utils/Project/LightMode';
import { useTheme } from '../../../context/themecontext';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Web.css'; // Add this file for styling

interface WebItem {
  url: string;
  image: string;
  title?: string;
  description?: string;
}

const WebImage: React.FC = () => {
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const data: WebItem[] = theme === 'dark'  ? allweb : allweb2;

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
            <Link to={item.url} >
              <div className="card-wrapper rounded">
                <LazyLoadImage
                  alt={item.title || 'Web Image'}
                  height={200}
                  effect="blur"
                  src={item.image}
                  width={150}
                  className="card-image rounded"
                />
                <div className="card-overlay ">
                  <h6 className="card-title   ">{item.title || 'Web App'}</h6>
                  <p className="card-description  ">{item.description || 'Project description'}</p>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WebImage;
