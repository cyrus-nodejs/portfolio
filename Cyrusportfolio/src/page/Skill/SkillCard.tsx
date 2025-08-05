
import  {Col} from "react-bootstrap"





const SkillCard = ({title, description, img}) => {
  return (
    <Col xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className="Skillframe  pt-3 shadow-sm "     >
     <p className="text-start  skill-text" >{img}</p>
    <p className="skill-text fw-bold fs-5   ">{title}</p>
    <p className="skill-text">{description}</p>
  </Col>
  
  
  )
}

export default SkillCard;