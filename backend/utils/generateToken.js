import jwt from "jsonwebtoken"

const generateTokenAndSetCookie=(userId,res)=>{
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d",

    })
    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000,
        httpOnly: true,     //prevent XSS attack cross site scripting attack 
        secure: process.env.NODE_ENV !=="developement",      //only send cookie over https
        sameSite:"strict"  // cross site request forgery attack 

        

    })
    

}

export default generateTokenAndSetCookie;