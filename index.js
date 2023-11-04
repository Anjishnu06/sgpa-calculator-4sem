const express=require('express');
const bodyParser=require('body-parser');
const getCredit = require('./credit');
const credit=require(__dirname+"/credit.js");
const serverless=require('serverless-http');
const app=express();
const router=express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");
app.set('views', __dirname + '/views');
let cgpa="";

app.get("/",function(req,res)
{
    res.render("index",{result:cgpa});
    cgpa="";
});

app.post("/",function(req,res)
{
    let sub1=req.body.subject1;
    let sub2=req.body.subject2;
    let sub3=req.body.subject3;
    let sub4=req.body.subject4;
    let sub5=req.body.subject5;
    let sub6=req.body.subject6;
    let sub7=req.body.subject7;
    let sub8=req.body.subject8;
    let sub9=req.body.subject9;
    let sub10=req.body.subject10;
    let total=22;
    let cred1=getCredit(sub1)*4;
    let cred2=getCredit(sub2)*4;
    let cred3=getCredit(sub3)*3;
    let cred4=getCredit(sub4)*1;
    let cred5=getCredit(sub5)*1;
    let cred6=getCredit(sub6)*1;
    let cred7=getCredit(sub7)*3;
    let cred8=getCredit(sub8)*2;
    let cred9=getCredit(sub9)*1;
    let cred10=getCredit(sub10)*2;
    let sum=(cred1+cred2+cred3+cred4+cred5+cred6+cred7+cred8+cred9+cred10+0.0);
    total=sum/total;
    cgpa="SGPA="+total.toString();
    res.redirect("/");

});



app.listen(3000,function()
{
    console.log("Server is running on port 3000");
})

