const express=require('express');
const app=express();




const R1=require('./RouterMod');
app.use('/Students',R1)

//------------------------------------------------------

const R2=require('./LibraryRoute');
app.use('/Library',R2);




var server=app.listen(3000,function(){
    console.log("Server is up at port 3000");
})