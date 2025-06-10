const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).send("Email is required");

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: 'dkgrouplabs@gmail.com',
        pass: 'gksbmjuwhzlzrgak',
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'dkgrouplabs@gmail.com',
      subject: "New Newsletter Subscriber",
      text: `You have a new subscriber: ${email}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
