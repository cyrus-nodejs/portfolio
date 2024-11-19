
import  {Container} from "react-bootstrap"
import { Projects } from "../../utils/Projects";
import ProjectCard from "./ProjectCard";


const Projectbox = () => {
  return (
    <section >
    <Container>
        {
            Projects.map((Stack, index) =>{
            return (
             <ProjectCard 
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

export default Projectbox;