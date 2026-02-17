import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//Register User
export const registerUser = async (req,res) => {
    try{
        const {name,email,password} = req.body;

        //Check for user existance
        const existingUser = User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already Exists"})
        }

        //Hash Password
        const hashPassword = await bcrypt.hash(password,10);

        const newUser = await User.create({
            name,
            email,
            password:hashPassword
        });

        res.status(201).json({message:"User registered successfully"});
    }
    catch (error){
   res.status(500).json({message:"Internal Server Error"});
    }
}

export const loginUser = async (req,res) =>{
    try {
        const {email , password} = req.body;

        const user = User.findOne({email})
        if(!user){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
                        return res.status(400).json({message:"Invalid credentials"})
        }
       //generate token
       const token = jwt.sign(
        {id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:'7d'}
       );

       res.status(200).json({
        token,
        user:
        {
            id:user.id,
            name:user.name,
            email:user.email
        }
       });
    } catch (error) {
        return res.status(500).json({message:"server Error"})
    }
}