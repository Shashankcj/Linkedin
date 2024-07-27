const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const cors=require("cors")
const singInRoute =require("./Routes/userSignInRoutes")
const signUpRoute=require("./Routes/userSingUpRoutes")
const homeRoute=require("./Routes/homeRoute")
const jwt=require("jsonwebtoken")
const cookieParser =require('cookie-parser');


const app=express();

dotenv.config();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",credentials:true
}))
app.use(cookieParser())

const PORT=process.env.PORT || 8000;
const MONGOOSE_URL=process.env.MONGOOSE_URL


mongoose
        .connect(MONGOOSE_URL)
        .then(()=>{
            console.log("Mongo db is connected")

            app.listen(PORT,()=>{
                console.log(`The server runnging on the port : ${PORT}`)
            })
        }).catch((err)=>{
            console.log(err)
        })



  
        app.use("/",singInRoute);
        app.use("/",signUpRoute);
        app.use("/",homeRoute)
 



      