const express = require("express");
const application = express();
const bodyParser = require("body-parser");

const bodyParserForm = bodyParser.urlencoded();

application.get("/index",bodyParserForm,function(req,res){
    res.sendFile("D:/iti/node/Day1/task2/index.html");
})

application.post("/index",bodyParserForm,function(req,res){

    console.log(req.body);
    if(req.body.password.length >= 8){
        res.send("Login Success");
    }
    else{
        res.send("Error Password Is Less Than 8 Characters");
    }
    res.sendFile("D:/iti/node/Day1/task2/index.html");
})


application.listen(8080);