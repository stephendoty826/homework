
const express = require('express');

const port = 3000

const app = express()

// 1. Hello World
app.get("/", (req, res)=>{
    res.send("Hello, world!")
})

// 2.Routes
app.get("/cats", (req, res) => {
    res.send("Meow")
})

app.get("/dogs", (req, res) => {
    res.send("Woof")
})

app.get("/cats_and_dogs", (req, res) => {
    res.send("Living together")
})

// 3. Route Parameters
app.get("/greet/:name", (req, res) => {
    let name = req.params.name
    res.send(`Hello, ${name}`)
})

// 4. Query Parameters: Tell the year you were born
app.get("/hello1", (req, res) => {
    let name = req.query.name || "world"
    let thisYear = new Date().getFullYear()
    let age = req.query.age
    let birthYear = thisYear - age  
    res.send(`Hello ${name}! You were born in ${birthYear}.`)
})


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})