const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./connection');
const manger_signup = require('./schema/home');
const port = 5000;

connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.post('/reg', async (req, res) => {
  try {
    const { nam, password, amount } = req.body;
    const existingUser = await manger_signup.findOne({ nam });

    if (existingUser) {
      res.json("same");
    } else {
      const newUser = await manger_signup.create({
        nam,
        password,
        amount,
      });
      console.log("Data stored successfully:", newUser);
      res.json("stored");
    }
  } catch (err) {
    console.error("Error storing data", err);
    res.json("not_stored");
  }
});

app.post('/log', async (req, res) => {
  const { nam, password } = req.body;
  try {
    const user = await manger_signup.findOne({ nam });
    if (user.password === password) {
      console.log("Logged in successfully");
      res.json("login_success");
    } else {
      console.log("Invalid credentials");
      res.json("not_login");
    }
  } catch (err) {
    console.error("Error during login", err);
    res.json( "Wrong_username");
  }
});

app.get('/get', async(req,res)=>{
    manger_signup.find()
    .then(console.log("finded"))
    .catch(console.log("cannot Find"))
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
