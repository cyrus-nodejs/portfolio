
import  {Container, Row} from "react-bootstrap"
import { Stacks } from "../../utils/Stack";
import SkillCard from "./SkillCard";


const Skillbox = () => {
  return (
    <section >
    <Container fluid>
             <Row className='d-flex flex-row flex-wrap '>
        {
            Stacks.map((Stack, index) =>{
            return (
       
             <SkillCard
              key={index}
              {...Stack}
             />
          
            )
            })
      }
         </Row>
    </Container>
</section>
  )
}

export default Skillbox;