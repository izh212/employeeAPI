const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    position:{
        type:String,
        require:true
    },
    contact:{
        type:String,
    },
})

module.exports = mongoose.model('Employee', EmployeeSchema);