import express  from "express"
import { register,loginUser } from "../controller/authController.js"

const authRouter = express.Router();

authRouter.post("/register",register);
authRouter.get("/login",loginUser);


export default authRouter

