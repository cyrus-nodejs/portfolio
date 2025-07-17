import express from "express";
const router = express.Router();
import cors from "cors";
import nodemailer from "nodemailer";
import 'dotenv/config'

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process!.env.EMAIL);
console.log(process!.env.PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process!.env.EMAIL,
    pass: process!.env.PASS
  },
});

contactEmail.verify((error: any) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.get("/", (req, res)=>{
  console.log("Welcome to nodemailer")
})

router.post("/contact", (req, res) => {

 const  {name, email, subject, message, phone} =  req.body
 console.log(req.body)
  // const name = req.body.name
  // const email = req.body.email;
  // const subject = req.body.subject
  // const message = req.body.message;
  // const phone = req.body.phone;
  const mail = {
    from: name,
    to: process.env.WORK_EMAIL,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Subject: ${subject}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error: any) => {
    if (error) {
      console.log(error)
          res.status(401).json({ success:false, message: "Failed to send" });
     
    } else {
      res.status(200).json({ success: true, message: "Message Sent" });
    }
  });
})