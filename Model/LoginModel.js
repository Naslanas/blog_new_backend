const mongoose=require("mongoose")
const loginSchema=new mongoose.Schema(
    {
        name:String,
        age:String,
        mobile:String,
        address:String,
        pincode:String,
        email:String,
        password:String
    }
)

module.exports=mongoose.model("blog_log",loginSchema)