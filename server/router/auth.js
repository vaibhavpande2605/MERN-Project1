const { json } = require("express");
const express = require("express");
const router = express.Router();

require("../server");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send("Hello from auth,js");
});

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, confirmpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !confirmpassword) {
    return res.status(422).json({ error: "fill all the places" });
  }

  User.findOne({ email: email }).then((userExist) => {
    if (userExist) {
      return res.status(422).json({ error: "email is already exist" });
    }

    const user = new User({
      name,
      email,
      phone,
      work,
      password,
      confirmpassword,
    });

    user
      .save()
      .then(() => {
        return res.status(201).json({ message: "successfully registered" });
      })
      .catch((err) => {
        res.status(500).json({ error: "failed to registred" });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
