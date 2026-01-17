const express = require("express");
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const dotenv = require("dotenv").config();

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.post("/user/contact", async (req, res) => {
  try {
    const { name, email, userMessage } = req.body;
    console.log("Received data:", req.body);
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let MailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Jarouid Oussama",
        link: "http://localhost:5173/",
      },
    });

    let response = {
      body: {
        name: MailGenerator.product.name,
        intro: "You have a new contact form your web site!",
        table: {
          data: [
            {
              item: "Name",
              desc: name,
            },
            {
              item: "Email",
              desc: email,
            },
            {
              item: "Message",
              desc: userMessage,
            },
          ],
        },
      },
    };

    let mail = MailGenerator.generate(response);

    let message = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "New Contact Form Your Portfolio",
      html: mail,
    };

    transporter
      .sendMail(message)
      .then(() => {
        return res.status(201).json({ message: "Email sended Successfully" });
      })
      .catch((err) => {
        console.error("Erreur Nodemailer:", err);

        return res.status(500).json({ err });
      });
  } catch (error) {
    return res.status(500).json({ error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`The server is running on port : ${PORT}`);
});
