let express = require('express');
let router = express.Router();

let movieRouter = require('./../apis/movies/router.js');


router.use('/movie',movieRouter)



module.exports = router;