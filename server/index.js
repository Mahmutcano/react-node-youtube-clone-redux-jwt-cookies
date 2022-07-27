import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Mongoya bağlandı");
    })
    .catch((err) => {
      throw err;
    });
};

// PORT
app.listen(8800, () => {
  connect()
  console.log("Bağlandı");
});
