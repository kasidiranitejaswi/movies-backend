let mongoose = require('mongoose');

let movieDetails = new mongoose.Schema({
    title : String,
    poster: String  
})

let movieModel = mongoose.model('movies',movieDetails);

module.exports = movieModel;