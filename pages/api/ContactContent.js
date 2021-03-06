import nodemailer from "nodemailer";
export default async (req, res) => {
  const { name, email, message, phone } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "nvhnam01@gmail.com",
      pass: "loxzqckmudirmioe",
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "nvhnam01@gmail.com",
      subject: `JoyS Contact form submission`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} </p><br>
      <p><strong>Email: </strong> ${email} </p><br>
      <p><strong>Phone: </strong> ${phone} </p><br>
      <p><strong>Message: </strong> <br><br> ${message} </p><br>
      `,
    });

    console.log("Message Sent");
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
