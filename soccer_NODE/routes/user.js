const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const User = require("../models/user");

router.post("/sign-up", async (req, res) => {
  const email = await User.findOne({ email: req.body.email });
  if (email) {
    res.status(200).json({
      message: "email existe",
    });
  } else {
    bcrypt.hash(req.body.password, 10, (err, cPwd) => {
      if (err) {
        console.log(err);
      } else {
        const data = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: cPwd,
        });
        data.save().then(() => {
          // here send mail
          var transporter = nodemailer.createTransport({
            host: "smtp-mail.outlook.com", // hostname
            secureConnection: false, // TLS requires secureConnection to be false
            port: 587, // port for secure SMTP
            auth: {
              user: "siwar-pfe@outlook.com",
              pass: "siwar123456789",
            },
            tls: {
              ciphers: "SSLv3",
            },
          });
          // mailOptions node mailler
          var mailOptions = {
            from: "siwar-pfe@outlook.com",
            to: req.body.email,
            subject: "nouveau appel d'offre",
            text: "nouveau appel d'offre visiter notre site web ",
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });

          res.status(200).json({
            message: "user added",
          });
        });
      }
    });
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    const pwd = await bcrypt.compare(req.body.password, user.password);
    if (pwd) {
      let finalUser = {
        id: user._id,
        name: user.firstName + " " + user.lastName,
      };
      res.status(200).json({
        message: "Ok",
        user: finalUser,
      });
    } else {
      res.status(200).json({
        message: "pwd incorrect",
      });
    }
  } else {
    res.status(200).json({
      message: "email invalid",
    });
  }
});

module.exports = router;
