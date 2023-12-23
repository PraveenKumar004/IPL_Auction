const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./connection');
const manger_signup = require('./schema/home');
const port = 5000;

connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.post('/reg', async (req, res) => {
  try {
    const r = await manger_signup.create({
      nam: req.body["nam"],
      password: req.body["password"]
    });
    console.log("Data stored successfully:", r);

  } catch (err) {
    console.error("Error storing data", err);
  }
});

app.post('/log', async (req, res) => {
  const { nam, password } = req.body; 

  try {
    const user = await manger_signup.findOne({ nam });

    if (user.password === password) {
      console.log("Logged in successfully");
      res.json("login_success")
    } else {
      console.log("Invalid credentials");
      res.json("not_login")
    }
  } catch (err) {
    console.error("Invalid Username");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
