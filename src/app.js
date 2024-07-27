import cookieParser from "cookie-parser";
import cors from "cors"
import express from "express";

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true
}))
// to bring data suc as submitted form data
app.use(express.json({limit: "16kb"}))
// to bring data from the url which is sometimes converted into % or + or etc...
app.use(express.urlencoded({extended:true,limit: "16kb"}))
// to handle files images etc...i.e. static data
app.use(express.static("public"))
app.use(cookieParser());
export {app}