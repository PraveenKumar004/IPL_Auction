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
      console.log("Data stored successfully:", newUser.nam);
      res.json(newUser.id);
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
// app.post("/contestant", async (req, res) => {
//   try {
//       const result = await manger_signup.find({ _id: req.body.id });
//       console.log(result);
//       res.send(result);
//     } catch (err) {
//       console.log("error by post by id:",err);
//     }
// });

// Update the route to handle both POST and GET requests
app.route('/contestant/:id')
  .post(async (req, res) => {
    const { id } = req.body;
    try {
      const user = await manger_signup.findById(id);
      if (user) {
        console.log("User found:", user);
        res.json(user);
      } else {
        console.log("User not found");
        res.json("id Not Found");
      }
    } catch (error) {
      console.error("Error fetching user by ID", error);
      res.status(500).json("Internal Server Error");
    }
  })
  // .get(async (req, res) => {
  //   const { id } = req.params;
  //   try {
  //     const user = await manger_signup.findById(id);
  //     if (user) {
  //       console.log("User found:", user);
  //       res.json(user);
  //     } else {
  //       console.log("User not found");
  //       res.json("id Not Found");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching user by ID", error);
  //     res.status(500).json("Internal Server Error");
  //   }
  // });





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
