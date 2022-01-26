const express = require("express");
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const app = express();

dotenv.config({path:'./config.env'})

console.log("hello vaibhav");

const URL = process.env.MONGO_URL;

mongoose.connect(
  URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    else {
      return console.log("mongodb connected");
    }
  }
);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port} 🔥`);
});

// Middlewares

const middleware = (req, res, next) => {
  console.log("Hello my middleware");
};
middleware();

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.get("/about", (req, res) => {
  res.send("Hello about from server");
});

app.get("/contact", (req, res) => {
  res.send("Hello contact from server");
});
app.get("/signin", (req, res) => {
  res.send("Hello login from server");
});
app.get("/signup", (req, res) => {
  res.send("Hello signup from server");
});
