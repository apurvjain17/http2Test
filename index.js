var http2 = require("http2");
var http = require("http");
var spdy = require("spdy");
var express = require("express");
var app = express();
var fs = require("fs");
app.use("/",function(req,res){
    res.status(200).json({message:"Hello World"});
});

var options = {
    key: fs.readFileSync("./server.key"),
    cert:  fs.readFileSync("./server.crt")
};
spdy.createServer(options,app).
    listen(8000,err=>{
        if(err)
            console.log(err);
         else
            console.log("server started on port 8000");   
    });
// http2.createServer(options,app).
//     listen(8001,err=>{
//         if(err)
//             console.log(err);
//          else
//             console.log("server started on port 8001");   
//     });
// http.createServer(options,app).
//     listen(8002,err=>{
//         if(err)
//             console.log(err);
//          else
//             console.log("server started on port 8000");   
//     });        