require("dotenv").config();
const twilio = require("twilio");
const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

const smsMessage = (req, res, next) => {
  let { message } = req.body;
  // console.log(message);
  client.messages
    .create({
      body: message,
      to: process.env.TWILIO_TO_NUMBER,
      from: process.env.TWILIO_FROM_NUMBER
    })
    .then(() => res.status(200).send("All Good"))
    .catch(() => sendStatus(500));
};

module.exports = {
  smsMessage
};
