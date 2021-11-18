const express = require("express");
const { sequelize } = require("../models");
const router = express.Router();
const db = require("../models")

const getOrderedTodos = async (res, user_id) => {
  // results is an array with 2 objects, index 0 has the data we want, index 1 is metadata
  
  // using pure SQL
  let results = await db.sequelize.query(`SELECT * FROM todos WHERE user_id = ${user_id} ORDER BY id ASC`)
  res.json(results[0])

  // using sequelize
  // let results = await db.todos.findAll({
  //   where: {user_id: user_id},
  //   order: [
  //     ["id", "ASC"]
  //   ]
  // });
  // res.json(results)
  
}

router.get("/", (req, res) => {
  res.render("index");
});

// GET /todos
router.get("/todos/user/:id", (req, res) => {
  let user_id = req.params.id
  getOrderedTodos(res, user_id)
})

// GET /todos/:id
router.get("/todos/id/:id", async (req, res) => {
  let id = req.params.id
  let result = await db.todos.findByPk(id)
  res.json(result)
})

// POST /todos
router.post("/todos/user/:id", async (req, res) => {
  
  // grab todoItem, and user_id to create new todo entry
  let todoItem = req.body.todoItem
  let user_id = req.params.id
  await db.todos.create({todoItem: todoItem, user_id: user_id})

  // send new todos
  getOrderedTodos(res, user_id)
})

// PUT /todos/:id
router.put("/todos/:user_id/:id", async (req, res) => {
  let user_id = req.params.user_id
  let id = req.params.id
  let updatedTodo = req.body.todoItem
  await db.todos.update({todoItem: updatedTodo}, {where:{id: id}})

  getOrderedTodos(res, user_id)
})

// DELETE /todos/:id
router.delete("/todos/:user_id/:id", async (req, res) => {
  let user_id = req.params.user_id
  let id = req.params.id
  await db.todos.destroy({where: {id: id}})

  getOrderedTodos(res, user_id)
})

module.exports = router;
