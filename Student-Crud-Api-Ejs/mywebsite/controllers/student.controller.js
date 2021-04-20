
const Student=require('../models/student.model');

//this func will perform insert operation
exports.student_create=(req,res)=>{
    let student=new Student({
        name:req.body.name,
        regid:req.body.regid
    });

    student.save((err)=>{
        if(err){
            return next(err);
        }
        res.redirect('/list');
    });
}

//this will load insert form,view to load
exports.student_formcreate=(req,res)=>{
   res.render('createform',{page:'New Student Record',menuId:'createform'})
}

//this function loads the view and finds all the documents in the student collection
exports.student_list=(req,res)=>{
    Student.find((err,student)=>{
        if(err){
            return next(err);
        }
        res.render('list',{page:'List all student record',menuId:'list',student:student})
    });
}

//this function will perform the delete operation
exports.student_detele=(req,res)=>{
    Student.findByIdAndRemove(req.params.id,(err)=>{
        if(err)
        return next(err);
        res.redirect('/list');
    });
}
     
//this function will render update form view
exports.student_updateform=function(req,res){
    Student.findById(req.params.id,function(err, student){
        if (err) return next(err);
        res.render('updateform',{page:'Update student', menuId:'updateform',student:student});
    })
};

//this function will perform the update operation
exports.student_update=function(req,res){
    Student.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, student) {
        if (err) return next(err);
        res.redirect('/list');
    });
};