//Route Method
const express = require('express');

const app=express();

//get
//http://localhost:3000/
app.get('/',function(req,res){
    res.send("Hello Express");

})

//http://localhost:3000/Books
app.get('/Students',(req,res)=>{
    res.send("Welcome to the books section")
})
//http://localhost:3000/Students
app.get('/Students/Books',(req,res)=>{
    res.send("<h1>Welcome to the Student Section</h1>")
})

/

//post


//http://localhost:3000/
app.post('/',(req,res)=>{
    res.send("Hi!");
})

app.post('/Students',function(req,res){
    res.send("Want maths Book");
})

app.post('/Students/Books',function(req,res){
    res.send("Want maths Book");
})

//all This is used when router doesnot find the route
app.all('/',function(req,res){
    res.send("Hello!")
next();
})

//http://localhost:3000/Students/34/books/8989  
app.get('/Students/:studentId/Books/:bookId', function (req, res) { 
    res.send(req.params) 
    }) 

    
   // http://localhost:3000/library/books  
   app.get('/library/books', function (req, res, next) { 
    res.write("the response will be sent by the next function")
    next(); 
    }, 
    function (req, res) { 
    res.write("Hello from B!") 
    }
    ) 
    

    var cb0 = function (req, res, next) {
            res.write('CB0')
            next()
          }
          
          var cb1 = function (req, res, next) {
            res.write('CB1')
            next()
          }
          
          app.get('/example/d', [cb0, cb1], function (req, res, next) {
            console.log('the response will be sent by the next function ...')
            next()
          }, function (req, res) {
            res.end('Hello from D!')
          })
        


var server=app.listen(3000,function(){
    console.log("Sever is up at port 3000");
})

