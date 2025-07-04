import  {Container, Image, Col, Row, Form, Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import img from "../assets/images/contact1.png"
import {  useState } from "react"

const Contact = () => {
  
  const formInitialDetails = {
    name: '',
    email: '',
    phone: '',
    subject:'',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState('');

  const onFormUpdate = (category: string, value:string) : void => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setButtonText("Sending...");
    const response = await fetch("https://connect-9q0l.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    const result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus( 'Message sent successfully');
    } else {
      setStatus('Something went wrong, please try again later.');
    }
  };
  
  return (
    <section id="Contact" className="section">
        <Container>
         
            <Row className='my-5' >
             
              
                
                     <h1 className=" mb-3 text-center">Contact</h1>
                  
               

                <Col sm={12} lg={6}   className="Contactframe">
                
                <Row className="mt-3">
                <Image src={img} fluid  /> 
               <Col>
               <Row className=" w-100  mt-5  ">
               <Link to='https://wa.link/vqp6e0' target="_blank" className='text-decoration-none text-light'>
  <div className="d-flex align-items-center ">
  <div className=" flex-shrink-0"><i className='bx bxl-whatsapp bx-md'></i></div>
  <div className="flex-grow-1 ms-3"><div className="text-start fs-5 fw-normal">Whatsapp</div><div className="text-start fs-5 ">https://wa.link/vqp6e0</div></div>
  
</div>
</Link></Row>

<Row className=" w-100  my-2  ">
  <Link to='https://www.linkedin.com/in/emmanuel-adeyemi-464ba5227' target="_blank" className='text-decoration-none text-light'>
  <div className="d-flex align-items-center ">
  <div className=" flex-shrink-0"><i className='bx bxs-envelope bx-md'></i></div>
  <div className="flex-grow-1 ms-3"><div className="text-start fs-5 fw-normal">Linkedin</div><div className="text-start fs-5 ">https://www.linkedin.com/in/emmanuel-adeyemi-464ba5227</div></div>
</div></Link></Row>

               
             </Col>
             </Row>
             </Col>
                
                <Col sm={12} lg={6}   className="Contactframe">
                    <Col>
                <Form onSubmit={handleSubmit}>
      <Row className="mb-1">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>YOUR NAME</Form.Label>
          <Form.Control className="form-text shadow-none text-light" value={formDetails.name} onChange={(e) => onFormUpdate('name', e.target.value)}  type="text" placeholder="" required/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>PHONE</Form.Label>
          <Form.Control className="form-text shadow-none text-light" value={formDetails.phone} onChange={(e) => onFormUpdate('phone', e.target.value)} type="text" placeholder="" required />
        </Form.Group>
      </Row>


      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>EMAIL</Form.Label>
        <Form.Control className="form-text shadow-none text-light" value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} type="email" placeholder="" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>SUBJECT</Form.Label>
        <Form.Control className="form-text shadow-none text-light" value={formDetails.subject} type="text" onChange={(e) => onFormUpdate('subject', e.target.value)} placeholder="" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>YOUR MESSAGE</Form.Label>
        <Form.Control className="form-text shadow-none text-light" value={formDetails.message}  as="textarea" onChange={(e) => onFormUpdate('message', e.target.value)} rows={8} placeholder="" required />
      </Form.Group>

      <div className="d-grid gap-2">
      <Button className=" bio-button " variant="outline-secondary" type="submit" size="lg">
       {buttonText}
      </Button>
      <p className="stack">{status}</p>
      
      </div>
    </Form>
    </Col>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact