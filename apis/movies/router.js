let express=require('express')
let router=express.Router();

let movieController = require('./controller')

router.use('/movieSearch',movieController.movieSearch)


module.exports=router;