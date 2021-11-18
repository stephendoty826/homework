
const express = require('express');
const app = express();
require("dotenv").config()
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.set('view engine', 'ejs');

//routes
app.use(require('./routes/index'));

// db.users.create({name: "admin"})
// db.users.create({name: "Peter"})
// db.users.create({name: "Susan"})

// db.todos.create({todoItem: "Get groceries"})
// db.todos.create({todoItem: "Mow"})
// db.todos.create({todoItem: "Walk the dog"})
// db.todos.create({todoItem: "Work out"})
// db.todos.create({todoItem: "Clean living room"})
// db.todos.create({todoItem: "Clothes shopping"})
// db.todos.create({todoItem: "Pet the cat"})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})