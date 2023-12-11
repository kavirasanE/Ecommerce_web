import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/authRoute.js";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use('/api/auth',authRouter);
app.use('api/auth',authRouter);

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
 