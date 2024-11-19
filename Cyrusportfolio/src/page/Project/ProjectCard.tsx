
import  { Col, Image, Row} from "react-bootstrap"

import { Link } from "react-router-dom";


const ProjectCard = ({ imgL,title, field, url }) => {
  
  

  
  return (
    <Row style={{ display:"inline-flex"}} >

    <Col  className="Projectframe "    >
      <Image className="pImage" src={imgL}  style={{borderRadius:"5px", margin:""}} fluid />
     
  <Link to={url}><div className="d-flex bg-danger rounded-2 flex-column middle ">
  <div className="p-1">{title}</div>
  <div className="p-1">{field}</div>
  <div className="p-1 stack">Click to Visit</div>
</div>
</Link>
  </Col>
  

      
  </Row>
  
  )
}

export default ProjectCard;