const express = require('express')
const app = express()
const heroes = require('../heroes')

app.get('/', (req,res)=>{
    res.json(heroes)
})

app.get('/:slug', (req,res)=>{
    const {slug} = req.params
    const heroe = heroes.find(heroe=> heroe.slug===slug)
    res.json(heroe)
})

module.exports = app
