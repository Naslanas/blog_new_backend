const express=require("express")
const LoginModel = require("../Model/LoginModel")

const router=express.Router()

router.post("/register",async(req,res)=>{
    let data=req.body
    let blog=new LoginModel(data)
    let result=await blog.save()
    res.json({
        status:"success"
    })
})

module.exports=router