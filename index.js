const bodyParser = require("body-parser");
const nodeMailer = require("nodemailer");
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.status(201).send("hello world!!");
});
// "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false  npm install --prefix client && npm run build --prefix client"
app.get("/api/form", (req, res) => {
  console.log(req.body);
  res.status(201).send(req.body);
});

app.post("/api/form", (req, res) => {
  console.log(req.body);
  nodeMailer.createTestAccount((err, account) => {
    if (err) {
      console.error("Failed to create a testing account. " + err.message);
      return process.exit(1);
    }

    const data = req.body;

    console.log("Credentials obtained, sending message...");

    const user = process.env.EMAIL_USER;
    const password = process.env.EMAIL_PASSWORD;

    // EMAIL SERVICES
    let transporter = nodeMailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      service: "gmail",
      auth: {
        user: user,
        pass: password,
      },
    });

    // MESSAGE FOR ME
    const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>Name : ${data.name}</li>
                <li>Email : ${data.email}</li>
                <li>Message : ${data.message}</li>
            </ul>
            <h3>Message</h3>
            <p>${data.message}</p>
        `;
    let mailOptions = {
      from: data.email,
      to: user,
      subject: "You've been subscribed",
      text: data.message,
      html: htmlEmail,
    };

    // MESSAGE FOR USER
    const htmlEmailToUser = `
            <h3>Hello ${data.name} !!</h3>
            <p>You\'ve been subscribing my website. <br/>
                I really appreciate that !! Enjoy
            </p>
        `;
    let mailOptionsToUser = {
      from: user,
      to: data.email,
      subject: "Thanks for subscribing..",
      text: `Hello ${data.name}!!`,
      html: htmlEmailToUser,
    };

    // SEND EMAIL FOR ME
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("Error occurred. " + err.message);
        return process.exit(1);
      }
      console.log("Message sent to: %s", info.messageId);
      console.log("Message URL: %s", nodeMailer.getTestMessageUrl(info));
    });

    // SEND EMAIL FOR USER
    transporter.sendMail(mailOptionsToUser, (err, info) => {
      if (err) {
        console.log("Error occurred. " + err.message);
        return process.exit(1);
      }
      console.log("Message sent to: %s", info.messageId);
      console.log("Message URL: %s", nodeMailer.getTestMessageUrl(info));
    });
    transporter.close();
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
