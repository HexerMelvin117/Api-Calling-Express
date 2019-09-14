const express = require('express')
const app = express()
const query = require('../queries/index')
const cors = require("cors")
const bodyParser = require("body-parser")

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json(query.getHeroe(1))
})
  
app.get('/all', (req, res) => {
  res.json(query.getHeroes())
})

app.get('/top10', (req, res) => {
  res.json(query.getTopTenForce())
})

app.get('/topintelligence', (req, res) => {
  res.json(query.getTopIntelligence())
})

app.get('/topstrength', (req, res) => {
  res.json(query.getTopStrength())
})

app.get('/fastestinhuman', (req, res) => {
  res.json(query.getFastest())
})

app.get('/womeninhumanstrength', (req, res) => {
  res.json(query.getWomenNonHuman())
})

app.get('/speedlackintel', (req, res) => {
  res.json(query.getSpeedIntFilter())
})

module.exports = app