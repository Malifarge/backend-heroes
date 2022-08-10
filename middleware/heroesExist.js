const heroes = require('../heroes')

const verifyHeroe = (req, res, next) => {

    const postHeroe= req.body
    const {slug} = req.body
    const heroe = heroes.find(heroe => heroe.slug===slug)
    const heroeIndex = heroes.findIndex(heroe => heroe.slug === slug)


  if (heroe) {
    res.status(409).json('Heroes exist')
  } else {
    req.heroe = postHeroe
    req.index= heroeIndex
    next()
  }
}

module.exports = {
  verifyHeroe: verifyHeroe
}