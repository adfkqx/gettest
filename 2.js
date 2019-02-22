var bar = require("./1.js");
var http = require("http");
var fs = require("fs");
var url = require("url");
http.createServer((req,res)=>{
    if(req.url =="/favicon.ico"){
        return
    }
    var obj = url.parse(req.url,true).query;
    console.log(obj);
    
    // console.log(bar.name,bar.password); 
    console.log(bar);
    if(obj.username == bar.name && obj.password == bar.password){
        console.log("匹配成功");
    }else{
        console.log("匹配失败");
        
    }
    res.end('123');
}).listen(3000);
//   console.log(bar.name,bar.password);