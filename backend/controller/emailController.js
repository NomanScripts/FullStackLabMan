const nodemailer = require("nodemailer");
const catchAsyncError = require("../middlewares/catchAsyncError");

exports.sendEmail = catchAsyncError(async (data, req, res) => {
  const { from, to, subject, text, html } = data;
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.json({
    message: "A password reset email has been sent. Please check your email!",
  });
});
