import express from 'express';
import cors from "cors";

const server = express();
let userLogin =[];
let tweets = [
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	  tweet: "eu amo o hub"
	},
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	  tweet: "eu amo o hub"
	},
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	  tweet: "eu amo o hub"
	},
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	  tweet: "eu amo o hub"
	},
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	  tweet: "eu amo o hub"
	},
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	  tweet: "eu amo o hub"
	},
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	  tweet: "eu amo o hub"
	},
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	  tweet: "eu amo o hub"
	},
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	  tweet: "eu amo o hub"
	},
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	  tweet: "eu amo o hub"
	},
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	  tweet: "eu amo o hub"
	}
];
let tweetsUser = [];

server.use(cors());
server.use(express.json());

server.post("/sign-up", (req,res)=>{
  userLogin.push(req.body);
	res.status(201).send("ok");
});

server.get("/tweets",(req,res)=>{
  
  let sendTweets = tweets.filter((data, index)=>{
    if(index > (tweets.length - 11)){
      return true;
    }
    return false;
  });
  res.send(sendTweets.reverse());

});
server.get("/tweets/:USERNAME",(req,res)=>{
	const username = req.params.USERNAME;
  
  let sendTweets = tweets.filter((data, index)=>{
    if(username === data.username){
      return true;
    }
    return false;
  });
  res.send(sendTweets.reverse());

});

server.post("/tweets", (req, res)=>{
  const tweet = {
    username: req.headers.user,
    avatar: userLogin[userLogin.length-1].avatar,
    tweet: req.body.tweet
  };
  
  tweets.push(tweet);
  tweetsUser.push(tweet);
	res.status(201).send("ok");
});

server.listen(5000);