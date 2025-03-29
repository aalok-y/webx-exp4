const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: String,
    age: Number,
    grade: String,
})

const StudentModel = mongoose.model('Student', StudentSchema);

module.exports = StudentModel