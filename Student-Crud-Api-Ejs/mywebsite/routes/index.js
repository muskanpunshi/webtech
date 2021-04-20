var express = require('express');
const student_controller=require('../controllers/student.controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home',menuId:'home' });
});


// crud opertations routes start here
// it will list all student
router.get('/list',student_controller.student_list);
//route that will call insert form
router.get('/createform',student_controller.student_formcreate);
//this will call insert opertion
router.post('/create',student_controller.student_create);
//delete operation
router.post('/:id/delete',student_controller.student_detele);

//call update form
router.post('/updateform/:id',student_controller.student_updateform);
router.post('/:id/update',student_controller.student_update);


module.exports = router;
