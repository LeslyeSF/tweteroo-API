import express from 'express';
import cors from "cors";

const server = express();
let userLogin =[];

server.use(cors());
server.use(express.json());

server.post("/sign-up", (req,res)=>{
  userLogin.push(req.body);
  res.send("ok");
  console.log("Login ok");
});


server.listen(5000);