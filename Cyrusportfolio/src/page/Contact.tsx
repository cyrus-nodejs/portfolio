import  {Container, Image, Col, Row, Form, Button} from "react-bootstrap"

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

  const onFormUpdate = (category, value:string) : void => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
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
            <Row  >
            <h6 className="color navpad text-center">CONTACT</h6>
                  <h1 className='text-center  '>Contact With Me</h1>

                <Col sm={12} lg={6}   className="Contactframe">
                
                <Row className="mt-3">
                <Image src={img} fluid  /> 
               <Col>
               <Row className=" w-100  mt-5  ">
  <div className="d-flex align-items-center ">
  <div className=" flex-shrink-0"><i className='bx bx-phone bx-md'></i></div>
  <div className="flex-grow-1 ms-3"><div className="text-start fs-5 fw-normal">Phone</div><div className="text-start fs-4 ">+2349044569655</div></div>
  
</div></Row>

<Row className=" w-100  my-2  ">
  <div className="d-flex align-items-center ">
  <div className=" flex-shrink-0"><i className='bx bxs-envelope bx-md'></i></div>
  <div className="flex-grow-1 ms-3"><div className="text-start fs-5 fw-normal">Email</div><div className="text-start fs-4 ">adeyemiemma45@gmail.com</div></div>
</div></Row>


               
             </Col>
             </Row>
             </Col>
                
                <Col sm={12} lg={6}   className="Contactframe">
                    <Col>
                <Form onSubmit={handleSubmit}>
      <Row className="mb-1">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>YOUR NAME</Form.Label>
          <Form.Control className="Formtext text-light" value={formDetails.name} onChange={(e) => onFormUpdate('name', e.target.value)}  type="text" placeholder="" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>PHONE</Form.Label>
          <Form.Control className="Formtext text-light" value={formDetails.phone} onChange={(e) => onFormUpdate('phone', e.target.value)} type="text" placeholder="" />
        </Form.Group>
      </Row>


      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>EMAIL</Form.Label>
        <Form.Control className="Formtext text-light" value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} type="email" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>SUBJECT</Form.Label>
        <Form.Control className="Formtext text-light" value={formDetails.subject} type="text" onChange={(e) => onFormUpdate('subject', e.target.value)} placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>YOUR MESSAGE</Form.Label>
        <Form.Control className="Formtext text-light" value={formDetails.message}  as="textarea" onChange={(e) => onFormUpdate('message', e.target.value)} rows={8} placeholder="" />
      </Form.Group>

      <div className="d-grid gap-2">
      <Button className="stack" variant="light" type="submit" size="lg">
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