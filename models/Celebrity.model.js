const { default: mongoose } = require("mongoose")
const Schema = mongoose.Schema;

//  Add your code here
const celebritieSchema = new Schema ({
    name : {
        type : String,
    },
    occupation : {
        type : String,
    },
    catchPhrase : {
        type : String,
    }

})

const Celeb = mongoose.model('Celeb', celebritieSchema)

module.exports = Celeb;