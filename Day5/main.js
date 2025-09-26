const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static('public'))

app.use('/blog' , blog)

// middware 1 - logger for our application
app.use((req, res, next) => {
  console.log(req.headers)
  req.drift = " I am coder";
  fs.appendFileSync("logo.txt" , `${Date.now()} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`)
  // res.send("hacked by middleware 1")
  next()
})

// middware 2
app.use((req, res, next) => {
  console.log('m2')
  req.drift = "i am divyanshi"
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello about!' + req.drift)
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
