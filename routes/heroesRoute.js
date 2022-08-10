const express = require('express')
const app = express()
const heroes = require('../heroes')
const { verifySlug } = require('../middleware/slug')
const { verifyHeroe } = require('../middleware/heroesExist')


app.get('/', (req,res)=>{
    res.json(heroes)
})

app.get('/:slug',verifySlug, (req,res)=>{
    res.json(req.heroe)
})

app.get('/:slug/power',verifySlug, (req,res)=>{
    res.json(req.heroe.power)
})

app.post('/', verifyHeroe,  (req,res)=>{
    heroes.push(req.heroe)
    res.json(req.heroe)
})

app.put('/:slug/power',verifySlug, (req,res)=>{
    req.heroe.power = req.body
    res.json(req.heroe.power)
})


module.exports = app
