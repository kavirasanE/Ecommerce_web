import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());


app.listen(port, () => {
  console.log(`Server is Started at ${port}`);
});

mongoose
.connect(process.env.MONGODB)
.then( () => {
    console.log("mongo db connected");
})
.catch((err) => {
    console.log({message:err.message});
});
 