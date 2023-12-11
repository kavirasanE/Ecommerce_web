import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import dotenv from "dotenv"

dotenv.config();
const verifyToken = asyncHandler((req,res,next) => {
    let token;
    let authHeaders = req.headers.authorization || req.headers.authorization;
    if(authHeaders && authHeaders.startsWith("Bearer")){
        token =authHeaders.split(" ")[1];
        jwt.verify(token,process.env.ACCESS_TOKEN,(err,decode) => {
            if(err){
                res.status(400)
                throw new Error ("your not authorized")

            }
            req.user=decode.user;
            next();
        })
    }
    if(!token){
        res.status(400)
        throw new Error ("Not a valid token")
    }
});

export default verifyToken