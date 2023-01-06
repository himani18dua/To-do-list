const express=require('express');
const bodyParser=require("body-parser");
const app=express();
const date=require(__dirname+"/date.js");

var items=["Buy food","Cook food","Eat food"];
var workItems=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine","ejs");

app.get("/",function(req,res){
    let day=date();
    res.render("List",{listTitle:day,listItem:items}); 
});
app.post("/",function(req,res){
    let item=req.body.newItem;
     if(req.body.list==="Work"){
         workItems.push(item);
         res.redirect("/work");
     }
     else{
         items.push(item);
         res.redirect("/");
     }

});
app.get("/work",function(req,res){
    res.render("List",{listTitle:"Work List",listItem:workItems});
});
app.post("/work",function(req,res){
    let item=req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});
app.get("/about",function(req,res){
    res.render("about");
})

app.listen(3000,function(req,res){
   console.log("The server is running on port 3000");
});
