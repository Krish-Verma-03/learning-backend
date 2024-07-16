import 'dotenv/config';
import express from "express";
const app = express();

// const port = 3000
app.get('/',(req,res)=>{
    res.send(
        `
            <h1>Hello, World!</h1>
            <p>This is a simple Express server running on port ${process.env.PORT}.</p>
        `
    )
})
app.get('/krish',(req,res)=>{
    res.send(
        `
            <h1>Hello, Krish!</h1>
            <p>This is a simple Express server running on port ${process.env.PORT}.</p>
        `
    )
})
app.get('/learn',(req,res)=>{
    res.send(
        `
            <h1>Hello, Learner!</h1>
             <p>This is a simple Express server running on port ${process.env.PORT}.</p>
        `
    )
})

app.listen(process.env.PORT , ()=>{
    console.log(` server running on port ${process.env.PORT}` ) ;
})