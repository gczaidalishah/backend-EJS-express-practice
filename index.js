const express =require("express");
const  app= express();
const path=require("path");
 
const port=8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/view"))
app.get("/",(req,res)=>{
    res.render("home.ejs")     //with res.send we can send string ,bolean ,array or object 
                                     //but with res.render we can send the entire css,html,js file
})

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
     const instaData=require("./data.json");
    const data=instaData[username];
    console.log(data);
    res.render("instagram.ejs", { data });
})
app.get("/rolldice",(req,res)=>{
    const dice = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { dice });
})

app.listen(port,()=>{
console.log(`listening on port ${port}`)
})
