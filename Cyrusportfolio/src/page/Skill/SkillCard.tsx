
import  {Col, Row} from "react-bootstrap"





const SkillCard = ({title, description, img}) => {
  return (
    <Row style={{ display:"inline-flex"}} className="">
    <Col className="Skillframe education pt-3 shadow-lg "  style={{marginTop:"0px"}}   >
     <p className="text-start  skill-text" >{img}</p>
    <p className="skill-text fw-bold fs-5   ">{title}</p>
    <p className="skill-text">{description}</p>
  
  </Col>
  </Row>
  
  )
}

export default SkillCard;