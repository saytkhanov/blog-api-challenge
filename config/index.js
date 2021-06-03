const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes')
const config = require('./config')

app.use(indexedDB)
app.use(express.json)
app.use(express.urlencoded({ extended: true}))

mongoose
  .connect(config.url, {
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
app.