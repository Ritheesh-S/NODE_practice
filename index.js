const express = require('express');
const app = express;

app.use(express.json());

app.get('/', async(req,res)=>{
    res.json("hello, world!");
});

app.listen(5000,()=>{
    console.log("listening to port 5000!");
});