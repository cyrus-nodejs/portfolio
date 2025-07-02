
import  {Col, Row} from "react-bootstrap"





const SkillCard = ({title, description, img}) => {
  return (
    <Row style={{ display:"inline-flex"}} className="">
    <Col className="Skillframe education color border"  style={{marginTop:"0px"}}   >
      <Row  className="education" gap={0} style={{margin:"2px", border:""}}>
     <Col className="education " style={{margin:"", borderRadius:"10px"}}  >{img}</Col>
    <h2 className="  education ">{title}</h2>
    <p className="">{description}</p>
    </Row>
  
   
   
  </Col>
  </Row>
  
  )
}

export default SkillCard;