require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: process.env.G_EMAIL,
    pass: process.env.G_PASS
  }
});

const emailForm = (req, res, next) => {
  //   console.log(req.body);
  const { issuecategory, trainingcategory, sendemail } = req.body;
  //   console.log(sendemail);
  const mailOptions = {
    from: process.env.G_EMAIL,
    to: sendemail,
    subject: "QA Audit Form Complete",
    html: `<div>
        A new Form has been created! The main issue was
        identified by ${issuecategory} and training was requested based on ${trainingcategory}.
      </div>`
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
  });
  res.status(200).json("Email Sent to the manager");
};

module.exports = {
  emailForm
};
