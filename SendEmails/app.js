import nodemailer from "nodemailer";
import Mailgen from "mailgen";

export default async function handler(req, res) {
  // ✅ Handle CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, userMessage } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Jarouid Oussama",
        link: process.env.FRONTEND_URL,
      },
    });

    const emailBody = {
      body: {
        name: "New Contact Message",
        intro: "You have a new contact form submission!",
        table: {
          data: [
            { item: "Name", desc: name },
            { item: "Email", desc: email },
            { item: "Message", desc: userMessage },
          ],
        },
      },
    };

    const emailHtml = mailGenerator.generate(emailBody);

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "New Contact Form - Portfolio",
      html: emailHtml,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
