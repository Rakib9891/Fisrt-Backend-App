require('dotenv').config()
const express = require('express')
const app = express()
const catFacts = {"fact":"Cats have 30 vertebrae (humans have 33 vertebrae during early development; 26 after the sacral and coccygeal regions fuse)","length":122}
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('This is twitter')
    })

app.get('/login', (req,res) => {
    res.send('<h1>Please login at this server</h1>')
})

app.get('/cat' , (req, res) => {
    res.json(catFacts)
})

app.get('/youtube', (req, res) => {
    res.send('<h1>You are in YouTube</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})