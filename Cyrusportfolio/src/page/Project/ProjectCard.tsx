
import  { Col, Image, Row} from "react-bootstrap"

import { Link } from "react-router-dom";


const ProjectCard = ({ imgL,title, field, url }) => {
  
  

  
  return (
    <Row style={{ display:"inline-flex"}} >

    <Col  className="Projectframe "    >
    <div className="proj-imgbx">
      <Image className="pImage" src={imgL}  style={{borderRadius:"5px", margin:""}} fluid />
      <Link to={url} className="text-decoration-none text-reset">
  <div className="proj-txtx " >
  <h5 className="text-center ">{title}</h5>
  <h6 className="text-center">{field}</h6>
  <span className="text-center stack">Click to Visit</span>
</div>

</Link>
</div>
  </Col>
  

      
  </Row>
  
  )
}

export default ProjectCard;