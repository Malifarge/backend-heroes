
const heroes = require('../heroes')

const verifyPower = (req, res, next) => {
  const { power } = req.params
  const heroePower = req.heroe.power.find(pow => pow === power)
  const powerIndex = req.heroe.power.findIndex(pow => pow === power)


  if (!heroePower) {
    res.status(404).json('Power not found')
  } else {
    req.power = heroePower
    req.Powindex= powerIndex
    next()
  }
}

module.exports = {
  verifyPower: verifyPower
}