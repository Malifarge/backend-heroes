
const { json } = require('body-parser');
const heroes = require('../heroes')

const validHero = (req, res, next) => {
  
  const keys =  JSON.stringify(Object.keys(req.body))
  const modele = JSON.stringify(Object.keys(heroes[0]))

  if (keys!== modele) {
    res.status(400).json('Bad request')
  } else {
    next()
  }
}

module.exports = {
  validHero: validHero
}