import express from "express";
import dotenv from "dotenv";
import userDatabase from "./database/mysqldb.js";
import userList from "./routes/searchroutes.js";
dotenv.config();
const app=express();
app.use(express.json());
app.use("/",userList);

const port=process.env.PORT||8080;

app.listen(port,()=>{
   userDatabase.promise();
    console.log(`successfully connected ${port}`);
})




