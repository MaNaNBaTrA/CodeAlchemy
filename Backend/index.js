import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const Mail = process.env.MMail;
const Pass = process.env.MPass;
const Frontend = process.env.FURL;

const corsOptions = {
    origin: Frontend, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: Mail,
        pass: Pass, 
    },
});

app.post('/send', (req, res) => {
    const { name,email, message } = req.body;

    const mailOptions = {
        from: Mail, 
        to: Mail, 
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nMessage: ${message}`,
        replyTo: email
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
