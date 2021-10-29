const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

// GET /todos

// GET /todos/:id

// POST /todos

// PUT /todos/:id

// DELETE /todos/:id

module.exports = router;
