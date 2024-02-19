import {User} from '../model/user.js'
import jwt from 'jsonwebtoken';
const login = async(req,res)=>{
    const {email,password}=req.body
    console.log('Email :',email);
    console.log('Password :',password);

    if(!email){
        console.log('All fields are required');
        return res.redirect('/login')
    }
    if(!password){
        console.log('Password is required');
        return res.redirect('/login')
    }
    
    
    const user = await User.findOne({email})
    if(user){
        console.log("Good");
    }
    else{
        console.log("Please enter valid email");
        return res.redirect('/login')
    }
    const ispasswordcorrect = await User.findOne({password})
    if(ispasswordcorrect){
        jwt.sign({email:email},process.env.JWT_SECRET,{},(err,token)=>{
            if(err) throw err;
            res.cookie("token",token)
        
        })
        console.log("Login Successfull");
      return res.status(200).json("login success")
    }
    else{
        console.log("Invalid credientials");
        res.json("Invalid credentials")
    }
    
}
export default login