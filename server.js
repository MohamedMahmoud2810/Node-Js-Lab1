const http = require("http");
const fs = require("fs");



function handler (req,res){
    console.log(req.method);
    console.log("hello server")
    console.log(req.url);
    res.writeHead(200,);
    
function returnFile(filename,res){
    const head = {
        'content-type': 'text/html'
    }
    res.writeHead(200,head);
        fs.readFile("D:/iti/node/Day1/"+filename,function(err,data){
            console.log(err);
            res.write(data);
            res.end();
        })
}

    if(req.url == "/index"){
        returnFile("index.html",res)
    }else if(req.url == "/contactUs"){
        returnFile("contactUs.html",res);
    }else if(req.url == "/about"){
        returnFile("about.html",res)
    }else{
        res.writeHead(404,{'content-type': 'text/html'});
        res.write('<html><h1>Page Not Found</h1></html>');
        res.end();
    }
    
    
}

const server = http.createServer(handler);
server.listen(8080);
// console.log(http);