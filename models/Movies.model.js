const { default: mongoose } = require("mongoose")
const Schema = mongoose.Schema;


//  Add your code here
const moviesSchema = new Schema ({
    title : {
        type : String,
    },
    genre : {
        type : String,
    },
    plot : {
        type : String,
    },
    cast : [
        {
        type: Schema.Types.ObjectId,
        ref:"Celeb" // need to be the same name of the collection 
        }
        ]

})

const Movie = mongoose.model('Movie', moviesSchema)

module.exports = Movie;