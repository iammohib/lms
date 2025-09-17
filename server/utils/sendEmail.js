import nodemailer from "nodemailer";

export const sendEmail = async (to, subject, message) => {
  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Send email
  await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: message, // plain text body
    html: message, // html body
  });
};
