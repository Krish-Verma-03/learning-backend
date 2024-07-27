import dotenv  from "dotenv";
import connectDB from "./db/db.js";



dotenv.config({
    path: './env'
})





connectDB();














//Immediate execution
// ;(async ()=>{
//     try{
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         console.log(`\n MongoDB connected ! DB host : ${connectionInstance.connection.host}`)

//         app.on("error",(error)=>{
//             console.log("ERROR: ",error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//     }catch(error){
//         console.log("Failed to connect to DB",error)
//         process.exit(1)
//     }
// })()