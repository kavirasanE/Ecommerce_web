import asyncHandler from "express-async-handler"
import Usermodel from "../models/userModels.js"
import bcrypt from "bcrypt"
import dotenv from "dotenv"

dotenv.config();
//@description
//router post data
// access public

export const register = asyncHandler (async(req,res) => {
    const  {username,email,password} =req.body;
    if(!username || !email ||! password) {
        res.status(400)
        throw new Error("Details not found");
    }
    const userRegister = await Usermodel.findOne({email});
    if(!userRegister) {
        res.status(400);
        throw new Error (" email not found ")
    }
  const hashedPassword = await bcrypt.hash(password,10)
  const reg = await Usermodel.create({
    username,
    email,
    password:hashedPassword
  })
  res.status(200).json(reg)
  });

//@description
//router get data
//access Private

export const loginUser = asyncHandler(async (res,req) => {
  const {email ,password} =req.body;
  if(!email || !password) {
    res.status(400)
    throw new Error("all fields are mandatory");
  }
  const find = await Usermodel.findOne({email});
  if(!find) {
    res.status(401)
    throw new  Error ("data not found")
  }
  const hashedPassword = await bcrypt.compare(password,find.password);
  if(find && hashedPassword){
  const accessToken = jwt.sign({
    find:{
      username:find.username,
      email:find.email,
      password:find.hashedPassword,
      id:find.id
    },
  },
  process.env.ACCESS_TOKEN,
  {expiresIn: "15d"})
  res.status(200).json({AccessToken : accessToken})
  }
});



