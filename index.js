import express from 'express';
import cors from "cors";

const server = express();
server.use(cors());

server.get("/hello",(req,res)=>{
  res.send("Meu primeiro servidor, yay!");
});

server.listen(5000);