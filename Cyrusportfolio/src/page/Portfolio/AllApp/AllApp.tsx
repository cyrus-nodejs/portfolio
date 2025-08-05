import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link, To } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { allapp } from '../../../utils/Project/Darkmode';
import { allapp2 } from '../../../utils/Project/LightMode';
import { useTheme } from "../../../context/themecontext";
import React, { useState } from 'react';
import './AllApp.css'; // Updated styles will go here

interface AppItem {
  url: To;
  image: string;
  title?: string;
  description?: string;
}

const AllAppImage: React.FC = () => {
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const data: AppItem[] = theme === 'dark'  ? allapp : allapp2;

  const renderCard = (item: AppItem, index: number) => (
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
            alt={item.title || "App Thumbnail"}
            height={200}
            effect="blur"
            src={item.image}
            width={150}
            className="card-content rounded"
          />

          <div className="card-overlay ">
            <h6 className="card-title  mb-1">{item.title || 'Card Title'}</h6>
            <p className="card-description ">{item.description || 'This is the card description.'}</p>
          </div>
        </div>
      </Link>
    </Col>
  );

  return (
    <Container>
      <Row>
        {data.map((item, index) => renderCard(item, index))}
      </Row>
    </Container>
  );
};

export default AllAppImage;
