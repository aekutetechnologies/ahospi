import mongoose from "mongoose";

const patientRegister= new mongoose.Schema({
    first_name:{
        type:String,
        required:[true,"Please rnter Patient Name"]
    },
    middel_name:{
        type:String,
        required:[true,"Please rnter Patient Name"]
    },
    last_name:{
        type:String,
        required:[true,"Please rnter Patient Name"]
    },
    gender:{
        type:String,
        required:[true,"Please select patient DOB"]
    }, 
    gender:{
        type:String,
        required:[true,"Please select gender of Patient"]
    }, 
    maritalstatus:{
        type:String,
        required:[true,"Please select marital status patient"]
    }, 
    emailid:{
        type:String,
        required:[true,"Please enter patient email id"],
        unique:true
    },
    
})