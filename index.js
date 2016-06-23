var express = require('express'),    
    students = require('./studentsWS'); 

 var app = express();
 var port = process.env.PORT || 3000;
 var allStudents;


//-----------------------Connection to Mongo----------------------------

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://usr_d:pass_d@ds011923.mlab.com:11923/exercise1');
var Student = require('./studentsDB');

mongoose.connection.once('open',function() {
 Student.find({},function(err,student) {
    if(err) throw err;
    allStudents = student;
    mongoose.disconnect();
  });
});


//---------------------------The App----------------------------------

 app.get('/', function (req, res) { 
     res.status(200).json({message:"Student app is running!"}); 
 }); 
 

// URL required - localhost:3000/getAllExcellenceStudent
 app.get('/getAllExcellenceStudent', function (req, res) { 
   var result = students.getAllExcellenceStudent(allStudents); 
   res.set('getAllExcellenceStudent', 'ok'); 
   res.json(result); 
 }); 
  
// URL required - localhost:3000/getStudGrade/1 - you can type any number...
 app.get('/getStudGrade/:id', function (req, res) {
     var temp_id = req.params.id; 
     var grade = students.getStudGrade(temp_id,allStudents); 
     res.set('getStudGrade', 'ok'); 
     res.json({"Student ID: " :temp_id, "Grade: " :grade}); 
 }); 
  
 // URL required - localhost:3000/getExcellenceByYear/1995 - you can type any number...
 app.get('/getExcellenceByYear/:year', function (req, res) {     
     var students_arr = students.getExcellenceByYear(req.params.year,allStudents); 
     res.set('getExcellenceByYear', 'ok'); 
     res.json(students_arr); 
 }); 
 
 app.get('/error', function (req, res) { 
     res.status(500).json({status:false, message:"Internal Server Error"}); 
 }); 
  
 app.listen(port);  
 console.log('listening on port ' + port);

// ------------------------------------------------------------------- 
