

import nodemailer from "nodemailer";

export async function POST(req, res) {
  if (req.method === "POST") {
    // const { name, email, message } = req.json();
    const body = await req.json()
console.log(body);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kilebefulton@gmail.com",
        pass: "qlpscdletddakqao",
      },
    });

    const mailOptions = {
      from: "kilebefulton@gmail.com",
      to: "kilebefulton@gmail.com",
      subject: "Contact Form Submission",
      html: `<h1>Contact Form</h1>
        <p>Name: ${body.name}</p>
        <p>Email: ${body.email}</p>
        <p>Message: ${body.message}</p>
      `,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.error(err);
        res.status(500).json( err.message );
      } else {
        console.log(info);
        res.status(200).json({ message: "Email sent successfully." });
      }
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

