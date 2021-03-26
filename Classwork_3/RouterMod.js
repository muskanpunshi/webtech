const express=require('express')
const router=express();

//http://localhost:3000/Students
router.get('/',function(req,res){
    res.send("Welcome to my home page");
})

//http://localhost:3000/Students/about
router.get('/about',function(req,res){
    res.send("Welcome to the about page");
})
module.exports=router;
