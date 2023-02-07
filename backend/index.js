// importing server
const express=require("express")
const register=require("./routes/register")
const cors = require("cors");
const cookieParser=require("cookie-parser")
const port=4000;
const app=express();
const connection=require("./db");
connection();
app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use("/api/v1",register);


app.listen(port,()=>console.log(`Listening to port ${port}...`));