var mongoose = require('mongoose');
var schema = mongoose.Schema;
var stSchema = new schema({
    id: Number,
    name: String,
    grade:Number,
    year:Number
}, {collection: 'students'});

var Student = mongoose.model('Student', stSchema);

module.exports = Student;
