const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});




// Use this when add angular front-end?
////load express module                               
//const express=require("express");

////call function loaded to "express" variable to get express object
//const app=express();

////assign port number
//app.listen(3000,()=> {
//    console.log("server starting on port 3000");
//}