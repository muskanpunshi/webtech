
const Student=require('../models/student.model');


exports.student_create=function(req,res){
        let students=new Student({
                name:req.body.name,
                gender:req.body.gender,
                regId:req.body.regId
                    });
    
        students.save(function(err,next){
            if(err){
                return next(err);
            }
            else{ 
                res.send('Student has been created');
            }
            
        })
    };

exports.student_details = function (req, res) {
    Student.findById(req.params.id, function (err, student) {
        if (err)
        return next(err);
        res.send(student);
    })
};
exports.student_update = function (req, res) {
    Student.findByIdAndUpdate(req.params.id, 
        {$set: req.body}, function (err, student) {
        if (err)
         return next(err);
        res.send('student has been udpated.');
    });
};
exports.student_delete = function (req, res) {
    Student.findByIdAndRemove(req.params.id, function (err) {
        if (err) 
        return next(err);
        res.send('Deleted successfully!');
    })
};