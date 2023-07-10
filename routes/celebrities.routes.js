// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

const router = require('express').Router()

const Celeb = require('../models/Celebrity.model')


// all your routes here

module.exports = router


router.get('/' , (request ,  response) =>{

    response.render("celebrities/celebrities")
})



router.get('/create' , async(request ,  response) =>{


    response.render("celebrities/new-celebritie")
})

router.post('/create', async(req , res) => {
    try{
    const celebInfo = req.body
    const newCeleb = await Celeb.create(celebInfo)
    res.redirect("/celebrities")
   } catch (error){
    console.log(error)
   }
    
})