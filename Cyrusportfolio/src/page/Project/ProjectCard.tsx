
import  { Col, Image, Row} from "react-bootstrap"

import { Link } from "react-router-dom";


const ProjectCard = ({ imgL,title, demoUrl, field, tools, gitIcon, homeIcon,  gitUrl }) => {
  
  

  
  return (
    <Row style={{ display:"inline-flex"}} >

    <Col  className="Projectframe "    >
    <div className="proj-imgbx">
      <Image className="pImage" src={imgL}  style={{borderRadius:"5px", margin:""}} fluid />
    
   <div className="proj-txtx   " >  
   <p className=" text-center fs-3 mt-3 pt-5">{title}</p>
   <p className=" " >{tools}  {field}</p>
  <Link to={gitUrl} className="text-decoration-none text-reset"><p className="text-center port-text">{gitIcon} View Github Repo</p></Link>
  <Link to={demoUrl} className="text-decoration-none text-reset"> <p className="text-center port-text pb-5"> {homeIcon} View Live Demo</p></Link> 
  </div>  

</div>
  </Col>
  

      
  </Row>
  
  )
}

export default ProjectCard;