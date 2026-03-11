import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.post("/chat", async (req, res) => {

const response = await fetch("https://api.coze.cn/open_api/v2/chat",{
method:"POST",
headers:{
"Authorization":"Bearer YOUR_API_KEY",
"Content-Type":"application/json"
},
body:JSON.stringify({
bot_id:"YOUR_BOT_ID",
user:"123",
query:req.body.message
})
})

const data = await response.json();
res.json(data);

})

app.listen(3000,()=>{
console.log("server running")
})
