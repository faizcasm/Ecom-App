import {User} from '../model/user.js'
const register = async(req,res)=>{
    const {username,email,password}=req.body
    console.log('Username :',username);
    console.log('Email :',email);
    console.log('Password :',password);

    if(!username||!email){
        console.log('All fields are required');
        return res.redirect('/register')
    }
    if(!password){
        console.log('Password is required');
        return res.redirect('/register')
    }
    const existinguser = await User.findOne({email})
    if(existinguser){
        console.log("User already exists");
        return res.redirect('/register')
    }
    const createuser=await User.create({
        username,
        email,
        password,
    })
    if(createuser){
        console.log('User created successfully');
        return res.status(200).json(createuser)
       
    }
    else{
        console.log("Signup failed ");
        return res.redirect('/register')
    }
}

export default register