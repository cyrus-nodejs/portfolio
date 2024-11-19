
import  {Container} from "react-bootstrap"
import { Stacks } from "../../utils/Stack";
import SkillCard from "./SkillCard";


const Skillbox = () => {
  return (
    <section >
    <Container>
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
    </Container>
</section>
  )
}

export default Skillbox;