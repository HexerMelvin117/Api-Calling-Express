const express = require('express')
const app = express()
const query = require('../queries/index')

app.get('/', (req, res) => {
  res.send(query.getHeroe(1))
})
  
app.get('/all', (req, res) => {
  res.send(query.getHeroes())
})

app.get('/top10', (req, res) => {
  res.send(query.getTopTenForce())
})

module.exports = app