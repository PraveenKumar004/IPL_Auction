const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const url = "mongodb+srv://praveenkumarv989:081104@clusteripl.hw9xgg7.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(url);
    console.log("Connected successfully");
  } catch (error) {
    console.log("not connected..");
  }
};
module.exports = connectDB;