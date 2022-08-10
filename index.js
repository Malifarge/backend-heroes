const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 5000

app.use(morgan('tiny'))


app.listen(port, () => {
  console.log(`Server running on ${5000}`)
})