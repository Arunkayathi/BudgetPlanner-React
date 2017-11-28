const express=require('express');
const path=require('path');
const app=express();
const port=process.env.PORT||3000;
const publicPath=path.join(__dirname,'..','public')
app.use(express.static(publicPath));
app.get("*",(req,res)=>{
<<<<<<< HEAD
=======
    
>>>>>>> af30f2b2ae2860f75079159ff9759c5dafbfe8f7
    res.sendFile(path.join(publicPath,"index.html"));
})
app.listen(port,()=>{
    console.log("Server has started listening on port "+port);
})