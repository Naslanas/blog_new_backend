const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const loginRoute=require("./controllers/LoginRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://nasla:nasla1711@cluster0.f8gbros.mongodb.net/new_blogDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

app.use("/api",loginRoute)

app.listen(3001,()=>{
    console.log("Server Running")
})