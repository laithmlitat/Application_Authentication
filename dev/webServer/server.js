
// console.log("hellooooooooo");

const express=require('express');

const httpserver=express();

httpserver.get('/',(req,res,next)=>{
    res.send("hello from other side");
})

httpserver.listen('3306',()=>{
    console.log("hello my frind welcom");
})
