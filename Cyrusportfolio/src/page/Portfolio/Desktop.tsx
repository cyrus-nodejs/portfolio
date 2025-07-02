import {Image} from 'react-bootstrap';

import { Desktop} from '../../utils/Projects';

const DesktopImage = () => {
  return (
    <section>
    
            {
                Desktop.map((desktop) =>{
                    return(
        
                  <Image src={desktop.image} className="all" fluid />
                    )
                })
            }
</section>
  )
}

export default DesktopImage