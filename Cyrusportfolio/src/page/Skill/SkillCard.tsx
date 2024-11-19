
import  {Col, Row} from "react-bootstrap"





const SkillCard = ({title, description, img}) => {
  return (
    <Row style={{ display:"inline-flex"}} className="">
    <Col className="Skillframe education color border"  style={{marginTop:"50px"}}   >
      <Row  className="education" gap={0} style={{margin:"2px", border:""}}>
     <Col className="education " style={{margin:"5px 0px 10px 0px", borderRadius:"10px"}}  >{img}</Col>
    <p className="fs-5 fw-medium education ">{title}</p>
    <p className="fs-6 fw-medium education">{description}</p>
    </Row>
  
   
   
  </Col>
  </Row>
  
  )
}

export default SkillCard;