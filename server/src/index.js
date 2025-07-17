"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const cors_1 = __importDefault(require("cors"));
const nodemailer_1 = __importDefault(require("nodemailer"));
require("dotenv/config");
// server used to send send emails
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL);
console.log(process.env.PASS);
const contactEmail = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    },
});
contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Ready to Send");
    }
});
router.get("/", (req, res) => {
    console.log("Welcome to nodemailer");
});
router.post("/contact", (req, res) => {
    const { name, email, subject, message, phone } = req.body;
    console.log(req.body);
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
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            console.log(error);
            res.status(401).json({ success: false, status: "Failed to send" });
        }
        else {
            res.status(200).json({ success: true, status: "Message Sent" });
        }
    });
});
