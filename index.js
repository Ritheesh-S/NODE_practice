const express = require('express');
const app = express();

app.use(express.json());

app.get('/test', async(req,res)=>{
    res.json("hello, world!");
});

let port_number=8085
app.listen(port_number,()=>{
    console.log("listening to port "+port_number+"!");
});