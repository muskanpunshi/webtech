const express=require('express')
const router=express();


http://localhost:3000/Library/book
router.route('/book')
.get(function(req,res){
    res.send("Retrieve a book");
})
.post(function(req,res){
    res.send("Add a book");
})
.put(function(req,res){
    res.send("Update a book");
})
.delete(function(req,res){
    res.send("Delete a books")
})


module.exports=router;
