// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

const Movie = require('../models/Movies.model')
const Celeb = require('../models/Celebrity.model')
// all your routes here


router.get("/", async (req, res, next) => {
    const allMovies =  await Movie.find()
    
    
    res.render("movies/movies", {movies: allMovies});
  });

router.get('/create' , async(request ,  response) =>{
try{
    const allCelebs =  await Celeb.find()
    console.log(allCelebs)
    response.render("movies/new-movie", {celebs: allCelebs})
}
catch (error) {
    console.log(error)
}   
})

router.post('/create', async(req , res) => {
    try{
    const movieInfo = req.body
    const newMovie = await Movie.create(movieInfo)
    res.redirect("/movies")
} catch (error){
    console.log(error)
}
})

router.get('/:movieId', async (req , res) =>{
    try{
        const movieId = req.params.movieId
        console.log(movieId)
        const movieDetails = await Movie.findById(movieId).populate("cast")
        console.log(movieDetails)
        res.render("movies/movie-details", {movie : movieDetails})
    }
    catch (error){
        console.log(error)
    }
})

router.post('/:id/delete', async(req , res) => {
    try{
        const movieId = req.params.id
         await Movie.findByIdAndDelete(movieId)
        res.redirect("/movies")
} catch (error){
    console.log(error)
}
})

router.get('/:id/edit', async (req, res) =>{
    try{
        const movieId = req.params.id
         const movie = await Movie.findById(movieId).populate("cast")
        res.render("movies/edit-movie" , {movie})
} catch (error){
    console.log(error)
}
})

router.post('/:id', async(req , res) => {
    try{
    const movieInfo = req.body
    const updateMovie = await Movie.findByIdAndUpdate(req.params.id, movieInfo)
    res.redirect("/movies")
} catch (error){
    console.log(error)
}
})



module.exports = router