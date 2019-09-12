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

app.get('/topintelligence', (req, res) => {
  res.send(query.getTopIntelligence())
})

app.get('/topstrength', (req, res) => {
  res.send(query.getTopStrength())
})

app.get('/fastestinhuman', (req, res) => {
  res.send(query.getFastest())
})

app.get('/womeninhumanstrength', (req, res) => {
  res.send(query.getWomenNonHuman())
})

app.get('/speedlackintel', (req, res) => {
  res.send(query.getSpeedIntFilter())
})

module.exports = app