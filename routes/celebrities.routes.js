// starter code in both routes/celebrities.routes.js and routes/movies.routes.js

const router = require('express').Router()

const Celeb = require('../models/Celebrity.model')


// all your routes here

module.exports = router


router.get('/' , async (request ,  response) =>{
    const allCelebs =  await Celeb.find()
    console.log(allCelebs)

    response.render("celebrities/celebrities", {celebs: allCelebs})
})



router.get('/create' , async(request ,  response) =>{
try{
    response.render("celebrities/new-celebritie")
}
catch (error) {
    console.log(error)
}

    
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