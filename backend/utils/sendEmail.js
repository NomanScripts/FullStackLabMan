const nodemailer = require("nodemailer");

exports.sendEmail = async (data) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  transporter.sendMail(
    {
      from: data.from,
      to: data.to,
      subject: data.subject,
      text: data.text,
      html: data.html,
    },
    (err, info) => {
      if (err) {
        console.log("error in sending email", err);
      } else {
        console.log(info.messageId);
      }
    }
  );
};
