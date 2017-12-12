const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/people')

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String,
    classes: [{
        type: Schema.Types.ObjectId,
        ref: "Class"
    }]
})
//we must register the schema with mongoose and make a model
const Student = mongoose.model("Student", studentSchema)

const classSchema = new Schema({
    name: String,

})

const Class = mongoose.model("Class", classSchema)

const newStudent = new Student({
    name: "Anders",
    classes: []
})

const ourClass = new Class({
    name: "Biology"
})

Student.find({name: "Anders"}, (err, student)=>{
    console.log(student)
})
