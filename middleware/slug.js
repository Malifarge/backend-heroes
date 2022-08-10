
const heroes = require('../heroes')

const verifySlug = (req, res, next) => {
  const { slug } = req.params
  const heroe = heroes.find(heroe => heroe.slug === slug)

  if (!heroe) {
    res.status(404).json('User not found')
  } else {
    req.heroe = heroe
    next()
  }
}

module.exports = {
  verifySlug: verifySlug
}