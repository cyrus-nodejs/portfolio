
import  { Col, Image, Row} from "react-bootstrap"

import { Link } from "react-router-dom";


const ProjectCard = ({ imgL,title, demoUrl,  gitUrl }) => {
  
  

  
  return (
    <Row style={{ display:"inline-flex"}} >

    <Col  className="Projectframe "    >
    <div className="proj-imgbx">
      <Image className="pImage" src={imgL}  style={{borderRadius:"5px", margin:""}} fluid />
     
  <div className="proj-txtx " >
   <h4 className="text-center port-text ">{title}</h4>
  <Link to={gitUrl} className="text-decoration-none text-reset"><h5 className="text-center port-text">Github Repo</h5></Link>
  <Link to={demoUrl} className="text-decoration-none text-reset"> <h5 className="text-center port-text">Live Demo</h5></Link>
</div>

</div>
  </Col>
  

      
  </Row>
  
  )
}

export default ProjectCard;