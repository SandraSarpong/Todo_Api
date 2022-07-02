const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
    time:{
        type: String,
        required: true,
    },
    isCompleted:{
        type: Boolean,
    },
    
},
{timestamps: true}
 );

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {Todo};