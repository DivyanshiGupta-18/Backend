const express = require('express')
const app = express()
const port = 3000

// app.get or app.post or app.put or app.delete(path, handler)

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.get('/about', (req, res) => {
//   res.send('Hello about!')
// })

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

// app.get('/contact', (req, res) => {
//   res.send('Hello contact!')
// })

app.get('/blog/:slug/:second', (req, res) => {
  // logic to fetch {slug} from the db
  console.log(req.params) //this will you can see in terminal or {slug: 'intro-to-padosi'}
  console.log(req.query) //this will you can see in terminal or {mode: 'dark', region: 'in'}
  res.send(`hello ${req.params.slug} and ${req.params.second}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
