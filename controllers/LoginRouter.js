const express=require("express")
const LoginModel = require("../Model/LoginModel")
const router=express.Router()

const bcrypt=require("bcryptjs")

hashPasswordGenerator = async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}
    


router.post("/register",async(req,res)=>{
    let {data}={"data":req.body}
    let password=req.body.password
    const hashedPassword=await hashPasswordGenerator(password)
    data.password=hashedPassword
    let blog=await LoginModel(data)
    let result=await blog.save()
    res.json(
        {
            status:"success"
        }
    )
})

module.exports=router