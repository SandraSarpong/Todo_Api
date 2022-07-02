const {Todo} = require('../models/todo');


const addTodo = async (req, res) =>{
try {
    await Todo.create(req.body);
    res.status(200).json({
      success: true, message: 'New todo is added successfully'
    });
  } catch (error) {
    res.status(400).json({success: false, message: 'An error occured whiles adding new todo: '+error.message});    
  }
}

const updateTodoById = (req,res) =>{
    const id = req.params.id;

    Todo.findByIdAndUpdate({_id: id}, req.body)
    .then((response) => {
        res.status(200).send(`Todo with specified ID update`);
        console.log(`Request made to update a todo by ID`)
    })
    .catch((err) => {
        res.status(500).send(`An error occured while updating todo`);
    })
}

const deleteTodoById = (req,res) =>{
    const id = req.params.id;

    Todo.findByIdAndDelete(id)
    .then ((response) => {
        res.status(200).send(`Todo with specified ID deleted`);
    })
    .catch((err) => {
        res.status(500).send(`An error occured whiles deleting flight by ID`);
    })
}

const getAllTodos = (req, res) =>{
    Todo.find()
    .then((response) => {
        res.status(200).send(response);
        console.log(`All todos created`)
    })
    .catch((err) => {
        res.status(500).send(`An error occured whiles getting all todos created`);
    });
};

module.exports = {
    addTodo,
    updateTodoById,
    deleteTodoById,
    getAllTodos,
};