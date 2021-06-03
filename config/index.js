const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes')
const config = require('./config')



app.use(express.json)
app.use(express.urlencoded({ extended: true}))

mongoose
  .connect('mongodb+srv://Abu:bmw550@cluster0.1ex3o.mongodb.net/blog-api', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })
.then(() => {
  console.log('run..')
})
.catch(e => {
  console.log(e)
})
