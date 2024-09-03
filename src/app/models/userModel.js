import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please provide a username"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"Please provide a email"],
        unique:true,
    },
    usertype:{
        type:String,
        required:[true,"Please provide a userType"],
    },
    password:{
        type:String,
        required:[true,"Please provide a username"],
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    forgoPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    ceryfyToken:String,
    verifyTokenExpiry:Date,
})

const User=mongoose.models.users || mongoose.model("users",userSchema);

export default User;