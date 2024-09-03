import { connect } from "@/app/dbConfig/dbConfig";

import { NextRequest,NextResponse } from "../../../../../node_modules/next/server";
import bcryptjs from "bcryptjs";
import User from "@/app/models/userModel";

connect();

export async function POST(request:NextRequest) {
    try{
        const reqBody = await request.json();
        const {username,email,usertype,password}= reqBody;
        console.log("my body",reqBody);
        //check if user already exists
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error:"User already exists"},{status:400});
        }

        //hast password
        const salt=await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt)
        const newUser = new User({
            username,
            email,
            usertype,
            password:hashedPassword,  
        })
        const savedUser =await newUser.save()
        console.log("saver user",savedUser);
        return NextResponse.json({
            message:"User created successfully",
            success:true,
            savedUser
        })
    }catch(error:any){
        return NextResponse.json({error:error.message},
            {status:500})
    }
}